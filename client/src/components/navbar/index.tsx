import styled from "styled-components";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 10px;
  overflow: hidden;
  background-color: #333;
  & li {
    float: left;
    border-right: 1px solid #bbb;
    &:last-child {
      border-right: none;
    }
    & a {
      color: #fff;
      padding: 10px;
      font-size: 22px;
    }
    & a:hover:not(.active) {
      background-color: #111;
    }
  }
`;

enum roleEnum {
  Funcionario = 1,
  Cliente = 2,
}

const Index = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const logout = () => {
    navigate("/login");
  };

  return (
    <Container>
      <li>
        <a>{user.name_user}</a>
      </li>
      <li>
        <a onClick={logout}>Cerrar sesion</a>
      </li>
      {user.id_role == roleEnum.Cliente && (
        <>
          <li>
            <a
              onClick={() => {
                navigate("/products");
              }}
            >
              Productos
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/shopping");
              }}
            >
              Carrito
            </a>
          </li>
        </>
      )}
    </Container>
  );
};

export default Index;
