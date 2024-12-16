package pl.zpi.zosk.baza.basic;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Klienci {
	public int klientId;
	public String nazwaFirmy;
	public String imieNazwisko;
	public String adres;
	public String daneKontaktowe;
	public int numerNip;
}
