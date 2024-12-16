package pl.zpi.zosk.baza.sterowniki;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.zpi.zosk.baza.basic.Klienci;

@RestController
@RequestMapping("/klienci")
public class KlienciController extends GenericController<Klienci> {

    public KlienciController(KlienciRepository repository) {
        super(repository);
    }
}