import {Container,} from "@chakra-ui/react";
import { ProfileCard, ProfileCardType } from "../../components/card/profileCard/ProfileCard";

const profileInfo:ProfileCardType = 
{
    firstName: "Damien",
    lastName: "Khashan",
    nickName: "Manitob1",
    imgSrc: "C:\Users\Dell\Desktop\backup dell\Documents\20220925_001153.jpg",
    bio: "Coucou la bio sans bio"
}

const profiles = 
[
    firstName: "Damien",
    lastName: "Khashan",
    nickName: "Manitob1",
    imgSrc: "C:\Users\Dell\Desktop\backup dell\Documents\20220925_001153.jpg",
    bio: "Coucou la bio sans bio"
]

export function MyProfilePage() {
    return (
      <Container>
          <ProfileCard {...profileInfo}/>
          <ProfileCard imgSrc={profileInfo.imgSrc} firstName={profileInfo.firstName}/>
          {profiles.map(profile => {
            return (
              <ProfileCard {...profile}/>
            )
          })}
      </Container>
    );
  }