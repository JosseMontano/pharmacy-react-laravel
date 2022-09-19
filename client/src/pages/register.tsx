import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { registerServices } from "../services/auth";
import Fondo from "../assets/Login/fondo.jpg";
import {
  Container,
  ContainerSoon,
  Title,
  Label,
  Input,
  Btn,
} from "../styles/register";
function Register() {
  const navigate = useNavigate();
  const [namePerson, setNamePerson] = useState("");
  const [lastNamePerson, setLastNamePerson] = useState("");
  const [ciPerson, setCiPerson] = useState(0);
  const [password, setPassword] = useState("");
  const [repitPassword, setRepitPassword] = useState("");

  const store = async () => {
    const res = await registerServices({
      password_user: password,
      password_user_confirmation: repitPassword,
      name_person: namePerson,
      last_name_person: lastNamePerson,
      ci_person: ciPerson,
    });
    if (res) {
      alert("usuario creado");
      return;
    }
    alert("a ocurrido un error");
  };
  let dataMap = [
    {
      label: "Nombre",
      type: "text",
      value: namePerson,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setNamePerson(e.target.value),
    },
    {
      label: "Apellido Paterno",
      type: "text",
      value: lastNamePerson,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLastNamePerson(e.target.value),
    },
    {
      label: "CI",
      type: "text",
      value: ciPerson,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setCiPerson(parseFloat(e.target.value)),
    },
    {
      label: "Contraseña",
      type: "password",
      value: password,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
    },
    {
      label: "Repetir contraseña",
      type: "password",
      value: repitPassword,
      onchange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setRepitPassword(e.target.value),
    },
  ];
  return (
    <>
      <Container fondo={Fondo}>
        <ContainerSoon>
          <Title>Registrarse</Title>

          {dataMap.map((v, i) => (
            <>
              <Label key={i}>{v.label}</Label>
              <Input type={v.type} value={v.value} onChange={v.onchange} />
            </>
          ))}

          <Btn onClick={() => store()} className="btn btn-primary">
            Enviar
          </Btn>
          <NavLink className="btn margin" to="/login">
            Volver a login
          </NavLink>
        </ContainerSoon>
      </Container>
    </>
  );
}
export default Register;
