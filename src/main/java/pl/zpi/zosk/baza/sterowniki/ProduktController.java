package pl.zpi.zosk.baza.sterowniki;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.zpi.zosk.baza.basic.Produkt;

@RestController
@RequestMapping("/produkt")
public class ProduktController extends GenericController<Produkt> {

    public ProduktController(ProduktRepository repository) {
        super(repository);
    }
}