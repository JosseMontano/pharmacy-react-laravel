import { RegisterModel } from "../interfaces/auth";
import { LoginModel } from "../interfaces/auth";
import { http } from "./http";

export const registerServices = async (data: RegisterModel) => {
  try {
    const response = await fetch(`${http}registro`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password_user: data.password_user,
        password_user_confirmation: data.password_user_confirmation,
        name_person: data.name_person,
        last_name_person: data.last_name_person,
        ci_person: data.ci_person,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return true;
    }
    return false

  } catch (err) {
    console.log(err) ;
  }
};


export const loginServices = async (data: LoginModel) => {
  try {
    const response = await fetch(`${http}login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password_user: data.password_user,
        name_user: data.name_user, 
      }),
    });
    if (response.ok) {
      const result = await response.json();
      document.cookie = `jwt=${result.acess_token}; max-age=${60*60*24}; path=/; samesite=stric` 
      if(result.acess_token != null){
        return true;
      }
    }

    return false
  } catch (err) {
    console.log(err) ;
  }
};
