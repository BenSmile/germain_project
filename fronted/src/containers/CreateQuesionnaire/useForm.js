import { useState , useContext} from 'react';
import { addQuestionnaire } from '../../context/actions/questionnaire';
import { GlobalContext } from '../../context/Provider';

export default () => {
    const [form, setForm] = useState({});

    const { questionniareDispatch } = useContext(GlobalContext);

    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value });
    }; 

    const onSubmit =()=>{
        addQuestionnaire(form)(questionniareDispatch)
    }

    console.log("form=", form)

    const validateForm = !form.description || !form.titre|| !form.code

    console.log("validateForm = ", validateForm);
    return { form, onChange, validateForm , onSubmit};

};