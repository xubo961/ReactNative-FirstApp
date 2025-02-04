import React from "react";
import {useUserLocalStorage} from "../../hooks/useUserLocalStorage";

const RolesViewModel = () => {
    const {user}  = useUserLocalStorage();

    return{user}

}

export default {RolesViewModel};