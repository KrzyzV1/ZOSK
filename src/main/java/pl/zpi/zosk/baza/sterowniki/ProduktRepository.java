package pl.zpi.zosk.baza.sterowniki;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import pl.zpi.zosk.baza.basic.Produkt;

@Repository
public class ProduktRepository extends GenericRepository<Produkt> {

    public ProduktRepository(JdbcTemplate jdbcTemplate) {
        super(jdbcTemplate, Produkt.class, "produkt", "Produkt_id");
    }
}
