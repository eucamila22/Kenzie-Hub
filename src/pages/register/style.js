import styled from "styled-components";

export const DivFormRegisterStyle = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    background-color: var(--grey-3);
    border-radius: var(--radius);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    width: 296px;
    height: 720px;
    margin: 0 auto;
    color: var(--grey-0);

    p {
        font-weight: var(--weight1);
        font-size: var(--tile3);
        color: var(--grey-0);
        padding: 5px 0;
    }

    small {
        font-weight: var(--weight4);
        font-size: var(--text2);
        color: var(--grey-1);
    }

    span {
        font-weight: var(--weight4);
        font-size: var(--text2);
        color: var(--negative);
    }

    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        align-content: center;
    }

    label {
        font-weight:var(--weight4);
        font-size: var(--text2);
        color: var(--grey-0);
        margin: 5px 0 5px 0;
    }

    input {
        width: 265px;
        height: 40px;
        background: var(--grey-2);
        border: 1px solid var(--grey-2);
        border-radius: var(--radius);
        padding-left: 10px;
        color: var(--grey-0);
        font-weight: var(--weight4);
        font-size: var(--text3);
    }

    input:focus{
        border: 1px solid var(--grey-0);
        border-radius: var(--radius);
    }

    select {
        width: 265px;
        height: 40px;
        background: var(--grey-2);
        border: 1px solid var(--grey-2);
        border-radius: var(--radius);
        color: var(--grey-1);
    }

    select:focus {
        background: var(--grey-2);
        border: 1px solid var(--grey-0);
    }

    div {
        width: 265px;
        height: 20px;
    }

    button {
        width: 265px;
        height: 40px;
        background: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: var(--radius);
        margin-top: 5px;
        margin-bottom: 10px;
        color: var(--grey-0);
    }

    button:hover {
        background: var(--color-primary-Focus);
        border: 2px solid var(--color-primary-Focus);
    }    
`
