package pl.zpi.zosk.baza.sterowniki;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.zpi.zosk.baza.basic.Dostawcy;

@RestController
@RequestMapping("/dostawcy")
public class DostawcyController extends GenericController<Dostawcy> {

    public DostawcyController(DostawcyRepository repository) {
        super(repository);
    }
}