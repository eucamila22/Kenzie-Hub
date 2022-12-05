import styled from "styled-components";

export const DivImgRegister = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 296px;
    padding: 0 10px;

    a {
        width: 80px;
        height: 30px;
        color: var(--grey-0);
        border: var(--grey-3);
        background-color: var(--grey-3);
        border-radius: var(--radius);
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a:hover {
        border: var(--grey-2);
        background-color: var(--grey-2);
    }
`