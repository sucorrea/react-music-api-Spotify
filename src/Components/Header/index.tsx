import React from "react";

import { Container, Imagem } from "./styles";
import LogoSpotify from "../../assets/images/logoSpotify.png";

const Header = () => {
  return (
    <Container>
      <Imagem src={LogoSpotify} alt="Logo Spotify" />
    </Container>
  );
};

export default Header;
