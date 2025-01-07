package pl.zpi.zosk.baza.basic;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Dostawcy {
	public int dostawcaId;
	public String nazwaFirmy;
	public String adres;
	public String daneKontaktowe;
	public String numerNip;
}