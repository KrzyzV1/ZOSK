package pl.zpi.zosk.baza.sterowniki;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import pl.zpi.zosk.baza.basic.StanMagazynowy;

@Repository
public class StanMagazynowyRepository extends GenericRepository<StanMagazynowy> {

    public StanMagazynowyRepository(JdbcTemplate jdbcTemplate) {
        super(jdbcTemplate, StanMagazynowy.class, "stan_magazynowy", "Stan_id");
    }
}
