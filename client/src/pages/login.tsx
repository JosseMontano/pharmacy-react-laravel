import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { loginServices } from "../services/auth";
import Fondo from "../assets/Login/fondo.jpg";
import {
  Container,
  ContainerSoon,
  Title,
  Label,
  Input,
  Btn,
} from "../styles/register";

import { useUser } from "../context/userContext";

function Login() {
  const navigate = useNavigate();
  const [namePerson, setNamePerson] = useState("");
  const [password, setPassword] = useState("");
  const { getUser } = useUser();
  const store = async () => {
    const { action, result } = await loginServices({
      name_user: namePerson,
      password_user: password,
    });
    getUser(result.id_role, result.name_user);
    if (action) {
      alert("usuario logeado");
      navigate("/products");
      return;
    }
    alert("a ocurrido un error");
  };

  let dataMap = [
    {
      label: "nombre",
      value: namePerson,
      type: "text",
      onchange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setNamePerson(e.target.value),
    },
    {
      label: "contraseña",
      value: password,
      type: "password",
      onchange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
    },
  ];

  return (
    <Container fondo={Fondo}>
      <ContainerSoon>
        <Title>Logearse</Title>

        {dataMap.map((v, i) => (
          <>
            <Label key={i}>{v.label}</Label>
            <Input type={v.type} value={v.value} onChange={v.onchange} />
          </>
        ))}

        <Btn onClick={() => store()} className="btn btn-primary">
          Enviar
        </Btn>
        <NavLink className="btn margin" to="/register">
          Crearse una cuenta
        </NavLink>
      </ContainerSoon>
    </Container>
  );
}

export default Login;
