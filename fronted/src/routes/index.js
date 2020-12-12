import { default as CreateQuestionniareComponent } from "../containers/CreateQuesionnaire";
import { default as LoginComponent } from "../containers/Login";
import { default as QuestionniareComponent } from "../containers/Questionniare";
import { default as RegisterComponent } from "../containers/Register";


const routes = [
    {
        path:"/createQuestionnaire",
        component : CreateQuestionniareComponent,
        title:"Creation Questionnaire"
    },
    {
        path:"/questionnaire",
        component : QuestionniareComponent,
        title:"Questionnaires"
    },
    {
        path:"/register",
        component : RegisterComponent,
        title:"Register"
    },
    {
        path:"/login",
        component : LoginComponent,
        title:"Login"
    }
]

export default routes;