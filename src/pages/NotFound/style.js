import styled from "styled-components";

export const DivNotFound = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
        width: 90vw;
        object-fit: cover;
    }

    @media (min-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 10vw;

        img {
            width: 90vw;
            height: 95vh;
            object-fit: cover;
        }
    }
`