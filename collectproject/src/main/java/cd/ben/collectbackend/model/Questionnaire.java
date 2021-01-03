package cd.ben.collectbackend.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

import java.util.*;

@Entity
@Table(name = "questionnaire")
public class Questionnaire {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Title is required")
    private String titre;
    @NotBlank(message = "Code is required")

    private String code;
    @NotBlank(message = "Description is required")
    private String description;
//    @NotNull(message = "Date is required")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date creationDate;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "questionnaire")
    private List<Question> questions = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "enquete_users",
            joinColumns = @JoinColumn(name = "enquete_id", table = "questionnaire"),
            inverseJoinColumns = @JoinColumn(name = "user_id", table = "users"))
    private Set<Role> enqueteurs = new HashSet<>();

    @PrePersist
    protected void onCreate(){
        this.creationDate = new Date();
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    @JsonIgnore
    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @JsonFormat(pattern = "yyyy-MM-dd")
    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }


    public Set<Role> getEnqueteurs() {
        return enqueteurs;
    }

    public void setEnqueteurs(Set<Role> enqueteurs) {
        this.enqueteurs = enqueteurs;
    }
}
