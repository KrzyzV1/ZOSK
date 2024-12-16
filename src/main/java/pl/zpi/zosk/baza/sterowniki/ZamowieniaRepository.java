package pl.zpi.zosk.baza.sterowniki;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import pl.zpi.zosk.baza.basic.Zamowienia;

@Repository
public class ZamowieniaRepository extends GenericRepository<Zamowienia> {

    public ZamowieniaRepository(JdbcTemplate jdbcTemplate) {
        super(jdbcTemplate, Zamowienia.class, "zamowienia", "Zamowienia_id");
    }
}