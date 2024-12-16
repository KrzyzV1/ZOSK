package pl.zpi.zosk.baza.basic;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StanMagazynowy {
    private int stanId;
    private int produktId;
    private int ilosc;
    private String lokalizacja;
}
