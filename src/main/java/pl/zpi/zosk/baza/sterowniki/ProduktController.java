package pl.zpi.zosk.baza.sterowniki;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.zpi.zosk.baza.basic.Produkt;

@RestController
@RequestMapping("/produkt")
public class ProduktController extends GenericController<Produkt> {

    public ProduktController(ProduktRepository repository) {
        super(repository);
    }
    
    @PatchMapping("/{id}")
    public ResponseEntity<String> partialUpdate(@PathVariable int id, @RequestBody Produkt updatedEntity) {
        int result = repository.partialUpdate(updatedEntity, id);
        
        if (result > 0) {
            return ResponseEntity.ok("Entity partially updated successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entity not found.");
        }
    }
}