package cd.ben.collectbackend.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "EnqueteurQuestionnaire")
public class EnqueteurQuesionnaire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @NotNull(message = "User is required")
    private User enqueteur;

    @ManyToOne
    @NotNull(message = "Questionnaire is required")
    private Questionnaire questionnaire;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getEnqeteur() {
        return enqueteur;
    }

    public void setEnqueteur(User enqueteur) {
        this.enqueteur = enqueteur;
    }

    public Questionnaire getQuestionnaire() {
        return questionnaire;
    }

    public void setQuestionnaire(Questionnaire questionnaire) {
        this.questionnaire = questionnaire;
    }
}
