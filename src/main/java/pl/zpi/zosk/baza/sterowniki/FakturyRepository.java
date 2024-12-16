package pl.zpi.zosk.baza.sterowniki;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import pl.zpi.zosk.baza.basic.Faktury;

@Repository
public class FakturyRepository extends GenericRepository<Faktury> {

    public FakturyRepository(JdbcTemplate jdbcTemplate) {
        super(jdbcTemplate, Faktury.class, "faktury", "Faktura_id");
    }
}
