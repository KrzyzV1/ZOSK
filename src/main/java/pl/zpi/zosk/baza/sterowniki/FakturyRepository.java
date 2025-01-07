package pl.zpi.zosk.baza.sterowniki;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import pl.zpi.zosk.baza.basic.Faktury;

@Repository
public class FakturyRepository extends GenericRepository<Faktury> {

    public FakturyRepository(JdbcTemplate jdbcTemplate) {
        super(jdbcTemplate, Faktury.class, "faktury", "Faktura_id");
    }

    @Override
    public int save(List<Faktury> entities) {
        if (entities == null || entities.isEmpty()) {
            return 0;
        }

        // Pobieramy wszystkie pola z klasy encji Faktura
        Field[] fields = Faktury.class.getDeclaredFields();

        // Pomijamy 'fakturaId' z zapytania SQL
        String columns = Arrays.stream(fields)
                .filter(field -> !field.getName().equals("fakturaId"))  // Pomijamy 'fakturaId'
                .map(Field::getName)
                .collect(Collectors.joining(", "));

        // Tworzymy string z '?' dla każdego pola (pomijając fakturaId)
        String placeholders = Arrays.stream(fields)
        	    .filter(field -> !field.getName().equals("fakturaId"))  // Pomijamy 'fakturaId'
        	    .map(f -> "?")  // Proste przypisanie "?" bez używania zmiennej field
        	    .collect(Collectors.joining(", "));


        // Budowanie zapytania SQL bez 'fakturaId'
        String sql = String.format("INSERT INTO %s (%s) VALUES (%s)", tableName, columns, placeholders);

        // Iteracja przez encje i zapis do bazy
        for (Faktury entity : entities) {
            Object[] values = Arrays.stream(fields)
                    .filter(field -> !field.getName().equals("fakturaId"))  // Pomijamy 'fakturaId'
                    .map(field -> {
                        try {
                            field.setAccessible(true);  // Umożliwiamy dostęp do prywatnych pól
                            return field.get(entity);   // Pobieramy wartość pola
                        } catch (IllegalAccessException e) {
                            throw new RuntimeException("Unable to access field: " + field.getName(), e);
                        }
                    }).toArray();

            // Wykonujemy zapytanie z odpowiednimi wartościami
            jdbcTemplate.update(sql, values);
        }

        return entities.size();  // Zwracamy liczbę zapisanych encji
    }
}
