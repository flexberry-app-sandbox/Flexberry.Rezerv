package Rezerv.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Rezerv.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Календарь
 */
@Entity(name = "IISRezervКалендарь")
@Table(schema = "public", name = "Календарь")
public class Kalendar {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Конец")
    private String конец;

    @Column(name = "Трудозатраты")
    private Integer трудозатраты;

    @Column(name = "Начало")
    private String начало;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Uchastnik")
    @Convert("Uchastnik")
    @Column(name = "Участник", length = 16, unique = true, nullable = false)
    private UUID _uchastnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Uchastnik", insertable = false, updatable = false)
    private Uchastnik uchastnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Plan")
    @Convert("Plan")
    @Column(name = "План", length = 16, unique = true, nullable = false)
    private UUID _planid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Plan", insertable = false, updatable = false)
    private Plan plan;


    public Kalendar() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКонец() {
      return конец;
    }

    public void setКонец(String конец) {
      this.конец = конец;
    }

    public Integer getТрудозатраты() {
      return трудозатраты;
    }

    public void setТрудозатраты(Integer трудозатраты) {
      this.трудозатраты = трудозатраты;
    }

    public String getНачало() {
      return начало;
    }

    public void setНачало(String начало) {
      this.начало = начало;
    }


}