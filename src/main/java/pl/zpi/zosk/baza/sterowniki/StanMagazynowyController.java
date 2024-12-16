package pl.zpi.zosk.baza.sterowniki;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.zpi.zosk.baza.basic.StanMagazynowy;

@RestController
@RequestMapping("/stan_magazynowy")
public class StanMagazynowyController extends GenericController<StanMagazynowy> {

    public StanMagazynowyController(StanMagazynowyRepository repository) {
        super(repository);
    }
}
