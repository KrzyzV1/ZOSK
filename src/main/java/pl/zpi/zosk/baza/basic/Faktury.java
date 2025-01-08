package pl.zpi.zosk.baza.basic;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Faktury {
    @JsonProperty("fakturaId")
    private int fakturaId;

    @JsonProperty("numerFaktury")
    private String numerFaktury;

    @JsonProperty("dataWystawienia")
    private String dataWystawienia;

    @JsonProperty("kwota")
    private Double kwota;

    @JsonProperty("statusPlatnosci")
    private String statusPlatnosci;

    @JsonProperty("klientId")
    private int klientId;

    @JsonProperty("dostawcaId")
    private int dostawcaId;
}
