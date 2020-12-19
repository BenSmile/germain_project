import { useState , useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { addQuestionnaire } from '../../context/actions/questionnaire';
import { GlobalContext } from '../../context/Provider';

export default () => {
    const [form, setForm] = useState({});

    const history = useHistory();

    const { questionniareDispatch, quesionnaireState } = useContext(GlobalContext);

    console.log("quesionnaireState = ", quesionnaireState)
    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value });
    }; 

    const onSubmit =()=>{
        addQuestionnaire(form)(questionniareDispatch);
        history.push("/");
    }

    console.log("form=", form)

    const validateForm = !form.description || !form.titre|| !form.code

    console.log("validateForm = ", validateForm);
    return { form, onChange, validateForm , onSubmit};

};