package pl.zpi.zosk.baza.sterowniki;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.zpi.zosk.baza.basic.Transakcje;

@RestController
@RequestMapping("/transakcje")
public class TransakcjeController extends GenericController<Transakcje> {

    public TransakcjeController(TransakcjeRepository repository) {
        super(repository);
    }
}