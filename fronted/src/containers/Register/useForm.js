import { useState } from 'react';

export default () => {
    const [form, setForm] = useState({});

    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value });
    };

    console.log("form=", form)

    const validateForm = !form.username || !form.firstname || !form.lastname || !form.password || !form.email

    console.log("validateForm = ", validateForm);
    return { form, onChange, validateForm };

};