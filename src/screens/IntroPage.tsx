import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

interface IntroPageProps {
    change: () => void
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F8B526;
  }
`

const IntroDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`

const BtnGroup = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const BtnWrapper = styled.div< { zIndex: number } >`
    z-index: ${props => props.zIndex};
    position: relative;
`

const BtnTop = styled.div`
    width: 240px;
    height: 240px;
    background-color: #EF5E40;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 120px;
    transform: rotate3d(1, 0, 0, 60deg);
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    z-index: 3;
`

const BtnTopText = styled.div`
    transform: scale(1,1.3);
`

const BtnMiddle = styled.div`
    width: 240px;
    height: 60px;
    background-color: #D55034;
    margin-top: -120px;
    z-index: 2;
`

const BtnBottom = styled.div`
    width: 240px;
    height: 240px;
    background-color: #D55034;
    border-radius: 120px;
    transform: rotate3d(1, 0, 0, 60deg);
    margin-top: -180px;
    z-index: 100;
`

const BtnShadow = styled.div`
    width: 320px;
    height: 320px;
    background-color: #D69C1E;
    border-radius: 160px;
    transform: rotate3d(1, 0, 0, 60deg);
    margin-top: -260px;
    z-index: 100;
`

const BtnLabel = styled.div`
    transform: rotate3d(1, 0, 0, 45deg);
    color: #E1A424;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
`

const IntroPage: React.FC<IntroPageProps> = (props) => {
    return (
        <IntroDiv id="intro">
            <GlobalStyle />
            <BtnGroup>
                <BtnWrapper zIndex={3}><BtnTop><BtnTopText>PUSH!!</BtnTopText></BtnTop></BtnWrapper>
                <BtnWrapper zIndex={2}><BtnMiddle /></BtnWrapper>
                <BtnWrapper zIndex={1}><BtnBottom /></BtnWrapper>
                <BtnWrapper zIndex={0}><BtnShadow /></BtnWrapper>
                <BtnLabel>Hyuns</BtnLabel>
            </BtnGroup>
            
        </IntroDiv>
    );
}

export default IntroPage;
