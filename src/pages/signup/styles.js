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
  background-color: white;
`

export const SignTitle = styled.p`
    font-weight: bold;
    font-size: 4vh;
    align-self: flex-start;
    margin-left: 10%;
    margin-bottom: 1%
`;

export const Subtitle = styled.p`
    font-weight: bold;
    font-size: 2vh;
    align-self: flex-start;
    margin-left: 10%;
    color: lightgray;
    text-align: justify;
    text-align-last: left
`;

export const FormArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    border: 2px solid red;
    width: 90%;
    height: 70%;
    margin: 5%
`

export const NamesRow = styled.div`
    flex-direction: row;
    border: 3px solid blue;
    align-self: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    padding: 5%
`;