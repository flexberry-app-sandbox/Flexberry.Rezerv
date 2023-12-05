package Rezerv.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Rezerv.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Проект
 */
@Entity(name = "IISRezervПроект")
@Table(schema = "public", name = "Проект")
public class Proekt {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Стоимость")
    private Integer стоимость;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Срок")
    private String срок;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Uchastnik")
    @Convert("Uchastnik")
    @Column(name = "Участник", length = 16, unique = true, nullable = false)
    private UUID _uchastnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Uchastnik", insertable = false, updatable = false)
    private Uchastnik uchastnik;


    public Proekt() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Integer стоимость) {
      this.стоимость = стоимость;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getСрок() {
      return срок;
    }

    public void setСрок(String срок) {
      this.срок = срок;
    }


}