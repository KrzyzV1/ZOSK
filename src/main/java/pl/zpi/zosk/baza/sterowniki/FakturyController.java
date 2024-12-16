package pl.zpi.zosk.baza.sterowniki;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.zpi.zosk.baza.basic.Faktury;

@RestController
@RequestMapping("/faktury")
public class FakturyController extends GenericController<Faktury> {

    public FakturyController(FakturyRepository repository) {
        super(repository);
    }
}