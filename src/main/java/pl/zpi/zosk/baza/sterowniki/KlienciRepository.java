package pl.zpi.zosk.baza.sterowniki;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import pl.zpi.zosk.baza.basic.Klienci;

@Repository
public class KlienciRepository extends GenericRepository<Klienci> {

    public KlienciRepository(JdbcTemplate jdbcTemplate) {
        super(jdbcTemplate, Klienci.class, "klienci", "Klient_id");
    }
}