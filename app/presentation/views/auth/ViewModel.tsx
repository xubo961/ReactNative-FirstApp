import React, {useState} from "react";
import {ApiDelivery} from "../../../data/sources/remote/api/ApiDelivery";

const LoginVIewModel = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    /*
  *
  * en property llega email o password
  * en value llega el valor de input
  *
  * array[email} = value
  *
  * */

    const onChangeLogin = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    return {
        ...values,
        onChangeLogin
    }
}

const RegisterViewModel = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        password: "",
        repeatPassword: "",
    });

    const onChangeRegister = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const register = async () => {
        try {
            const response = await ApiDelivery.post("/users/create", values)
            console.log(JSON.stringify(response))
        } catch (error) {
            console.log("ERROR" + error);
        }
    }

    return {
        ...values,
        onChangeRegister,
        register
    }
}

export default {LoginVIewModel, RegisterViewModel};


