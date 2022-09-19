export interface RegisterModel {
    password_user: string,
    password_user_confirmation: string,
    name_person: string,
    last_name_person: string,
    ci_person: number
}
 
export interface LoginModel{
    name_user:string,
    password_user:string
}