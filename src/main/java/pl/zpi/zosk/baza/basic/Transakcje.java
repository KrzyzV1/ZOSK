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
	public Double kwota;
	public int ilosc;
	public String dataTransakcji;
	public String numerPartii;
	public String numerZamowienia;
	public int magazynierId;
	public int klientId;
	public int dostawcaId;
	public int zamowieniaId;
}
