import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import { AuthContext } from "../../contexts/auth";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
      <C.Content>
        <C.Infos>Seu Email: {user.email}</C.Infos>
        <C.Infos> Seu Senha: {user.password}</C.Infos>
      </C.Content>
    </C.Container>
  );
};

export default Home;
