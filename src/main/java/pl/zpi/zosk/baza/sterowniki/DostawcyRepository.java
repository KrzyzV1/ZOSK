package pl.zpi.zosk.baza.sterowniki;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import pl.zpi.zosk.baza.basic.Dostawcy;

@Repository
public class DostawcyRepository extends GenericRepository<Dostawcy> {

    public DostawcyRepository(JdbcTemplate jdbcTemplate) {
        super(jdbcTemplate, Dostawcy.class, "dostawcy" ,"dostawcaId");
    }
}