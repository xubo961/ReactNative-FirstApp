import {RoleInterface} from "./Role";

export interface UserInterface {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    password: string;
    repeatPassword?: string;
}

// Lo de pick solo selecciona lo que quieras de una interfaz base
export type UserLogininterface = Pick<UserInterface, "email" | "password">;

// Lo de abajo es lo mismo que el de arriba, solo que el de abajo omite lo que quieras de una interfaz base
//export type UserLoginOptionalInterface = Omit<UserInterface, "id" | "firstname" | "lastname" | "number" | "repeatPassword">

export interface UserLogin extends UserInterface{
    token: string;
    roles: RoleInterface[]
}
