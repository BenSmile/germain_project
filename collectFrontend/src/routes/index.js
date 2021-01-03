import Home from "../components/Home";
import Login from "../components/Login";
import AddQuestionnaire from "../components/Questionnaire/AddQuestionnaire";
import  UpdateQuestionnaire from "../components/Questionnaire/UpdateQuestionnaire";
import ListQuestionnaire from "../components/Questionnaire/ListQuestionnaire";
import Questionnaire from "../components/Questionnaire/Questionnaire";
import Register from "../components/Register";



const routes = [
    {
        path:"/createQuestionnaire",
        component : AddQuestionnaire,
        title:"Creation Questionnaire"
    },
    {
        path:"/questionnaire/:id",
        component : Questionnaire,
        title:"Questionnaire"
    },

    {
        path:"/updateQuestionnaire/:id",
        component : UpdateQuestionnaire,
        title:"Modifier Questionnaire"
    },

    {
        path:"/",
        component : ListQuestionnaire,
        title:"Questionnaires"
    },
    {
        path:"/register",
        component : Register,
        title:"Register"
    },
    {
        path:"/login",
        component : Login,
        title:"Login"
    }
]

export default routes;


