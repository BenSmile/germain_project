package cd.ben.collectbackend.model;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "reponse")
public class Reponse {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    @NotBlank(message = "Enquete is required")
    private String enquete;
    @NotBlank(message = "Value is required")
    private String valeur;
    @NotNull(message = "Question is required")
    @ManyToOne
    @JoinColumn(name="questionId", nullable = false)
    private Question question;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEnquete() {
        return enquete;
    }

    public void setEnquete(String enquete) {
        this.enquete = enquete;
    }

    public String getValeur() {
        return valeur;
    }

    public void setValeur(String valeur) {
        this.valeur = valeur;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}
