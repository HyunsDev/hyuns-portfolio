import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const StyledWrapper = styled.div`
position: fixed;
background-color: #000000;
transition: 200ms;
`

function LoadingBorders() {
    const [status, setStatus] = useState('30px');

    setTimeout(() => {
        setStatus("0px")
    }, 1000)


    return (
        <>
            <StyledWrapper status={status} />
        </>
    )
}

function LoadingScreen() {


    return (
        <div className="loading">
            <LoadingBorders />
        </div>
    );
}

export default LoadingScreen;
