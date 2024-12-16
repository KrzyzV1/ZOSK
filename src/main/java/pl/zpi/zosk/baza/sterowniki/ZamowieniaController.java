package pl.zpi.zosk.baza.sterowniki;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.zpi.zosk.baza.basic.Zamowienia;

@RestController
@RequestMapping("/zamowienia")
public class ZamowieniaController extends GenericController<Zamowienia> {

    public ZamowieniaController(ZamowieniaRepository repository) {
        super(repository);
    }
}