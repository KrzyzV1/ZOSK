package pl.zpi.zosk.baza.basic;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Produkt{
	private int produktId;
	private String nazwa;
	private String kategoria;
	private String numerSeryjny;
	private int cena;
}