package pl.zpi.zosk.baza.sterowniki;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.zpi.zosk.baza.basic.StanMagazynowy;

@RestController
@RequestMapping("/stan_magazynowy")
public class StanMagazynowyController extends GenericController<StanMagazynowy> {

    public StanMagazynowyController(StanMagazynowyRepository repository) {
        super(repository);
    }
    
    @PatchMapping("/{id}")
    public ResponseEntity<String> partialUpdate(@PathVariable int id, @RequestBody StanMagazynowy updatedEntity) {
        int result = repository.partialUpdate(updatedEntity, id);
        
        if (result > 0) {
            return ResponseEntity.ok("Entity partially updated successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entity not found.");
        }
    }
}
