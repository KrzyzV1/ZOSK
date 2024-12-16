package pl.zpi.zosk.baza.basic;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Zamowienia {
	public int zamowieniaId;
	public String dataZamowienia;
	public String status;
	public int dostawcaId;
}
