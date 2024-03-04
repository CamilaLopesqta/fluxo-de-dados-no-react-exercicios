import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";
import React, { useState } from "react";

//filho do componente app que pega a tela toda
function ProfileScreen() {
  //estados para o profile form e menu
  const [nome, setNome] = useState("");
  const [bio, setBio] = useState("");
  const [imagem, setImagem] = useState("");

  return (
    <ScreenContainer>
      {/* passando props para o profile menu */}
      <ProfileMenu nome={nome} bio={bio} imagem={imagem} />

      {/* passando props para o profile form */}
      <ProfileForm setNome={setNome} setBio={setBio} setImagem={setImagem} />
    </ScreenContainer>
  );
}

export default ProfileScreen;
