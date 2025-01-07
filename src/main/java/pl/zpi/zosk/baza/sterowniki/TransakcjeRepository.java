package pl.zpi.zosk.baza.sterowniki;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import pl.zpi.zosk.baza.basic.Transakcje;

@Repository
public class TransakcjeRepository extends GenericRepository<Transakcje> {

    public TransakcjeRepository(JdbcTemplate jdbcTemplate) {
        super(jdbcTemplate, Transakcje.class, "transakcje", "transakcjaId");
    }
}