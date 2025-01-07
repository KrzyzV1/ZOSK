package pl.zpi.zosk.baza.basic;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Faktury {
	public int fakturaId;
	public String numerFaktury;
	public String dataWystawienia;
	public Double kwota;
	public String statusPlatnosci;
	public int klientId;
	public int dostawcaId;
}
