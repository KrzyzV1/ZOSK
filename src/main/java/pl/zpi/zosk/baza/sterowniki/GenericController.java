package pl.zpi.zosk.baza.sterowniki;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public abstract class GenericController<T> {

    protected final GenericRepository<T> repository;

    protected GenericController(GenericRepository<T> repository) {
        this.repository = repository;
    }

    
    @GetMapping
    public ResponseEntity<List<T>> getAll() {
        return ResponseEntity.ok(repository.getAll());
    }

    
    @PostMapping
    public ResponseEntity<String> save(@RequestBody T entity) {
        if (entity == null) {
            return ResponseEntity.badRequest().body("No entity provided for saving.");
        }

        int savedCount = repository.save(entity);  // save przyjmuje pojedynczy obiekt
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCount + " entity saved successfully.");
    }


    @GetMapping("/{id}")
    public ResponseEntity<T> getById(@PathVariable int id) {
        T entity = repository.getById(id);
        if (entity != null) {
            return ResponseEntity.ok(entity);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<String> update(@PathVariable int id, @RequestBody T updatedEntity) {
        int result = repository.update(updatedEntity, id);
        if (result > 0) {
            return ResponseEntity.ok("Entity updated successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entity not found.");
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<String> partialUpdate(@PathVariable int id, @RequestBody T updatedEntity) {
        int result = repository.partialUpdate(updatedEntity, id);
        if (result > 0) {
            return ResponseEntity.ok("Entity partially updated successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entity not found.");
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable int id) {
        int result = repository.deleteById(id);
        if (result > 0) {
            return ResponseEntity.ok("Entity deleted successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entity not found.");
        }
    }
}