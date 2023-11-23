import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Navbar from "../../components/Navbar";
import CardPaciente from "../../components/CardPaciente";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
      <div>
        
    <C.Container>
      <Navbar/>
    </C.Container>
  
    <C.Card>
      <CardPaciente/>
    </C.Card>

      </div> 

  );
};

export default Home;

{/* <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
  Sair
</Button> */}