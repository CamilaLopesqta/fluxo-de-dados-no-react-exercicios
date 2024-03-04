import {
  ProfileBio,
  ProfileImage,
  ProfileName,
  ProfileWrapper,
} from "./ProfileMenu.styled";
//filho do profile screen
const ProfileMenu = (props) => {
  return (
    <ProfileWrapper>
      {/* recebendo props */}
      <ProfileImage src={props.imagem} alt="Profile Image" />
      <ProfileName>{props.nome}</ProfileName>
      <ProfileBio>{props.bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;
