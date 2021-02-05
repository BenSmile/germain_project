package cd.ben.collectbackend.controller.payload;

import javax.validation.constraints.NotBlank;

public class LoginPayload {

    @NotBlank(message = "Nom d'utilisateur obligatoire")
    private String username;

    @NotBlank(message = "Mot de passe obligatoire")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
