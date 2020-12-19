import { useState , useContext} from 'react';
import { addQuestionnaire } from '../../context/actions/questionnaire';
import { GlobalContext } from '../../context/Provider';

export default () => {
    const [form, setForm] = useState({});

    // const { questionniareDispatch, quesionnaireState } = useContext(GlobalContext);

    // console.log("quesionnaireState = ", quesionnaireState)
    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value });
    }; 

    // const onSubmit =()=>{
    //     addQuestionnaire(form)(questionniareDispatch)
    // }

    console.log("form=", form)

    const validateForm = !form.username || !form.password

    console.log("validateForm = ", validateForm);
    return { form, onChange, validateForm};

};