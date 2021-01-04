package cd.ben.collectbackend.controller.payload;

import javax.validation.constraints.NotNull;

public class AssignUserQuestionnaire {

    @NotNull
    private  Long userId;

    @NotNull
    private Long questionnaireId;


    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getQuestionnaireId() {
        return questionnaireId;
    }

    public void setQuestionnaireId(Long questionnaireId) {
        this.questionnaireId = questionnaireId;
    }
}
