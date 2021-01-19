import Home from "../components/Home";
import Login from "../components/Login";
import AddQuestionnaire from "../components/Questionnaire/AddQuestionnaire";
import UpdateQuestionnaire from "../components/Questionnaire/UpdateQuestionnaire";
import ListQuestionnaire from "../components/Questionnaire/ListQuestionnaire";
import Questionnaire from "../components/Questionnaire/Questionnaire";
import Register from "../components/Register";
import AddQuestion from "../components/Question/AddQuestion";
import Profil from "../components/User/Profil";
import ListUser from "../components/User/ListUser";
import HomepageLayout from "../components/HomepageLayout";
import ListInvestigators from "../components/User/ListInvestigators";



const routes = [
    {
        requireAuth: true,
        path: "/createQuestionnaire",
        component: AddQuestionnaire,
        title: "Creation Questionnaire"
    },

    {
        requireAuth: true,
        path: "/questionnaires",
        component: ListQuestionnaire,
        title: "Quesionnaires"
    },
    {
        requireAuth: true,
        path: "/questionnaire/:id",
        component: Questionnaire,
        title: "Questionnaire"
    },

    {
        requireAuth: true,
        path: "/questionnaire/:id/ajouterQuestion",
        component: AddQuestion,
        title: "Questionnaire"
    },


    {
        requireAuth: true,
        path: "/updateQuestionnaire/:id",
        component: UpdateQuestionnaire,
        title: "Modifier Questionnaire"
    },

    {
        requireAuth: false,
        path: "/",
        component: HomepageLayout,
        title: "Accueil"
    },

    {
        requireAuth: true,
        path: "/assign_investigators/:id",
        component: ListInvestigators,
        title: "Enqueteurs"
    },

    {
        requireAuth: true,
        path: "/home",
        component: Home,
        title: "Questionnaires"
    },

    {
        requireAuth: false,
        path: "/register",
        component: Register,
        title: "Register"
    },
    {
        requireAuth: false,
        path: "/login",
        component: Login,
        title: "Login"
    },
    {
        requireAuth: true,
        path: "/profil",
        component: Profil,
        title: "Profil"
    }
    ,
    {
        requireAuth: true,
        path: "/allusers",
        component: ListUser,
        title: "Utlisateurs"
    }
]

export default routes;


