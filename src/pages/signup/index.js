import React from 'react';
import { Container, RightColumn, SignUpLogo, LeftColumn } from './styles';
import cookLogo from "./assets/cooking.png"
export default function Signup() {
  return (
    <Container>
        <RightColumn>
            <SignUpLogo src={cookLogo}/>
        </RightColumn>
        <LeftColumn>
            oioioioioioi
        </LeftColumn>
    </Container>
  );
}
