import styled from 'styled-components';

export const Container = styled.div`
  display: flex
`;

export const RightColumn = styled.div`
    background-color:  #F1B1D4;
    width: 45%;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column
`;

export const SignUpLogo = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media only screen and (max-width: 48em){
        width: 60%;
        height: 25%
    };
    @media (min-width: 768px){
        width: 60%;
        height: 50%
    };
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 55%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
  right: 0;
  background-color: #FAFAFA;
`

export const SignTitle = styled.p`
    font-weight: bold;
    font-size: 4vh;
    align-self: flex-start;
    margin-left: 10%;
    margin-bottom: 1%;
    color: #2D292D;
`;

export const Subtitle = styled.p`
    font-weight: bold;
    font-size: 2vh;
    align-self: flex-start;
    margin-left: 10%;
    color:  #A9A0B6;
    text-align: justify;
    text-align-last: left
`;

export const FormArea = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    width: 90%;
    height: 70%;
    margin-left: 10%;
`

export const NamesRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 3%
`;

export const NameLabel = styled.label`
    font-weight: bold;
    font-size: 1.5vh;
    align-self: flex-start;
    color: #2D292D;
`;

export const NameInput = styled.input`
    align-self: flex-start;
    background-color: lightgrey;
    border: 2px solid #F1B1D4;
    height: 100%;
    width: 50%;
    padding-top: 1%;
    padding-bottom: 1%;
    border-radius: 15px;
    box-sizing: border-box;
    padding-inline: 15px;
    -webkit-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
    margin-top: 1%;
    &:focus {
        background-color: white;
        width: 90%
    }
`;

export const EmailRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 3%
`;

export const EmailLabel = styled.label`
    font-weight: bold;
    font-size: 1.5vh;
    align-self: flex-start;
    color: #2D292D;
`;

export const EmailInput = styled.input`
    align-self: flex-start;
    background-color: lightgrey;
    border: 2px solid #F1B1D4;
    height: 100%;
    width: 50%;
    padding-top: 1%;
    padding-bottom: 1%;
    border-radius: 15px;
    box-sizing: border-box;
    padding-inline: 15px;
    -webkit-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
    margin-top: 1%;
    &:focus {
        background-color: white;
        width: 90%
    }
`;

export const PasswordRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 3%
`;

export const PasswordLabel = styled.label`
    font-weight: bold;
    font-size: 1.5vh;
    align-self: flex-start;
    color: #2D292D;
`;

export const PasswordInput = styled.input`
    align-self: flex-start;
    background-color: lightgrey;
    border: 2px solid #F1B1D4;
    height: 100%;
    width: 50%;
    padding-top: 1%;
    padding-bottom: 1%;
    border-radius: 15px;
    box-sizing: border-box;
    padding-inline: 15px;
    -webkit-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
    margin-top: 1%;
    &:focus {
        background-color: white;
        width: 90%
    }
`;