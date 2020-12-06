package cd.ben.collectbackend.model;


import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "questionnaire")
public class Questionnaire {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String titre;
    private String description;
    private Date date;


    @OneToMany
    private List<Question> questions;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
