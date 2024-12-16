package pl.zpi.zosk.baza.basic;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transakcje {
	public int transakcjaId;
	public int produktId;
	public int kwota;
	public int ilosc;
	public String dataTransakcji;
	public int numerPartii;
	public int numerZamowienia;
	public int magazynierId;
	public int klientId;
	public int dostawcaId;
	public int zamowieniaId;
}
