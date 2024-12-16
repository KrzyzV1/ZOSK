package pl.zpi.zosk.baza.sterowniki;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.List;

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

    public int insert(String insertQuery, Object... params) {
        return jdbcTemplate.update(insertQuery, params);
    }
    
    public int update(T updatedEntity, int id) {
        StringBuilder queryBuilder = new StringBuilder("UPDATE " + tableName + " SET ");
        Object[] params = new Object[10];
        Field[] fields = updatedEntity.getClass().getDeclaredFields();
        int i = 0;

        for (Field field : fields) {
            field.setAccessible(true);
            try {
                Object value = field.get(updatedEntity);
                if (value != null) {
                    queryBuilder.append(field.getName() + " = ?, ");
                    params[i++] = value;
                }
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        queryBuilder.delete(queryBuilder.length() - 2, queryBuilder.length());
        queryBuilder.append(" WHERE " + idColumn + " = ?");
        params[i] = id;

        
        System.out.println("Generated Query: " + queryBuilder.toString());
        System.out.println("Parameters: " + Arrays.toString(params));

        return jdbcTemplate.update(queryBuilder.toString(), params);
    }

    
    public int deleteById(int id) {
        String query = "DELETE FROM " + tableName + " WHERE id = ?";
        return jdbcTemplate.update(query, id);
    }
}
