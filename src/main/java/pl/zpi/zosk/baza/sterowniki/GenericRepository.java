package pl.zpi.zosk.baza.sterowniki;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public abstract class GenericRepository<T> {

    private final JdbcTemplate jdbcTemplate;
    private final Class<T> entityClass;
    private final String tableName;
	private Object idColumn;

	protected GenericRepository(JdbcTemplate jdbcTemplate, Class<T> entityClass, String tableName, String idColumn) {
        this.jdbcTemplate = jdbcTemplate;
        this.entityClass = entityClass;
        this.tableName = tableName;
        this.idColumn = idColumn;
    }


    public List<T> getAll() {
        String query = "SELECT * FROM " + tableName;
        return jdbcTemplate.query(query, BeanPropertyRowMapper.newInstance(entityClass));
    }

    
    public T getById(int id) {
        String query = "SELECT * FROM " + tableName + " WHERE " + idColumn + " = ?";
        return jdbcTemplate.queryForObject(query, BeanPropertyRowMapper.newInstance(entityClass), id);
    }
    
    public int save(List<T> entities) {
        if (entities == null || entities.isEmpty()) {
            return 0; 
        }

   
        Field[] fields = entityClass.getDeclaredFields();

     
        String columns = Arrays.stream(fields)
                .map(Field::getName)
                .collect(Collectors.joining(", "));
        String placeholders = Arrays.stream(fields)
                .map(field -> "?")
                .collect(Collectors.joining(", "));

      
        String sql = String.format("INSERT INTO %s (%s) VALUES (%s)", tableName, columns, placeholders);

     
        for (T entity : entities) {
            Object[] values = Arrays.stream(fields)
                    .map(field -> {
                        try {
                            field.setAccessible(true);
                            return field.get(entity);
                        } catch (IllegalAccessException e) {
                            throw new RuntimeException("Unable to access field: " + field.getName(), e);
                        }
                    }).toArray();

            jdbcTemplate.update(sql, values);
        }

        return entities.size();
    }


    
    public int update(T updatedEntity, int id) {
        StringBuilder queryBuilder = new StringBuilder("UPDATE " + tableName + " SET ");
        Field[] fields = updatedEntity.getClass().getDeclaredFields();

        List<Object> params = new ArrayList<>();
        for (Field field : fields) {
            try {
                field.setAccessible(true);
                Object value = field.get(updatedEntity);
                if (value != null) {
                    queryBuilder.append(field.getName()).append(" = ?, ");
                    params.add(value);
                }
            } catch (IllegalAccessException e) {
                throw new RuntimeException("Unable to access field: " + field.getName(), e);
            }
        }

        queryBuilder.delete(queryBuilder.length() - 2, queryBuilder.length());
        queryBuilder.append(" WHERE ").append(idColumn).append(" = ?");

        params.add(id);

        return jdbcTemplate.update(queryBuilder.toString(), params.toArray());
    }
    

    public int partialUpdate(T updatedEntity, int id) {
        StringBuilder queryBuilder = new StringBuilder("UPDATE " + tableName + " SET ");
        Field[] fields = updatedEntity.getClass().getDeclaredFields();

        List<Object> params = new ArrayList<>();
        boolean fieldsUpdated = false;

        for (Field field : fields) {
            try {
                field.setAccessible(true);
                Object value = field.get(updatedEntity);
                if (value != null) {
                    queryBuilder.append(field.getName()).append(" = ?, ");
                    params.add(value);
                    fieldsUpdated = true;
                }
            } catch (IllegalAccessException e) {
                throw new RuntimeException("Unable to access field: " + field.getName(), e);
            }
        }

        if (fieldsUpdated) {
            queryBuilder.delete(queryBuilder.length() - 2, queryBuilder.length());
            queryBuilder.append(" WHERE ").append(idColumn).append(" = ?");
            params.add(id);
            
            return jdbcTemplate.update(queryBuilder.toString(), params.toArray());
        } else {
            return 0;
        }
    }

    
    public int deleteById(int id) {
        String query = "DELETE FROM " + tableName + " WHERE " + idColumn + " = ?";
        return jdbcTemplate.update(query, id);
    }
}
