import styled from "styled-components";


export const DivImg = styled.div`
    display: flex;
    justify-content: center;
    height: 100px;
    width: 296px;
    margin-top: 80px;
`
export const DivFormStyle = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    background-color: var(--grey-3);
    border-radius: var(--radius);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    width: 296px;
    height: 400px;
    margin: 0 auto;
    color: var(--grey-0);

    h2 {
        font-weight: var(--weight1);
        font-size: var(--tile3);
        color: var(--grey-0);
        margin: 34px 0 10px 0;
    }

    div > a {
        width: 265px;
        height: 40px;
        background: var(--grey-1);
        border: 2px solid var(--grey-1);
        border-radius: var(--radius);
        color: var(--grey-0);
        margin-bottom: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    div > a:hover {
        background: var(--grey-2);
        border: 2px solid var(--grey-2);
    }

    div > p {
        text-align: center;
        font-weight: var(--weight2);
        font-size:var(--text2);
        color: var(--grey-1);
        margin: 27px 0 18px 0;
    }
    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: flex-start;
        align-content: center;

        label {
            font-weight:var(--weight4);
            font-size: var(--text2);
            color: var(--grey-0);
            margin: 10px 0;
        }

        input {
            width: 265px;
            height: 40px;
            background: var(--grey-2);
            border: 1px solid var(--grey-2);
            border-radius: var(--radius);
            padding-left: 10px;
            color: var(--grey-0);
        }

        input:focus {
            background: var(--grey-2);
            border: 1px solid var(--grey-0);
            border-radius: var(--radius);
        }

        button {
            width: 265px;
            height: 40px;
            background: var(--color-primary);
            border: 2px solid var(--color-primary);
            border-radius: var(--radius);
            margin-top: 20px;
            color: var(--grey-0);
        }

        button:focus {
            background: var(--color-primary-Focus);
            border: 2px solid var(--color-primary-Focus);
        }

        div {
            width: 265px;
            height: 20px;
        }

        span {
            font-weight: var(--weight4);
            font-size: var(--text2);
            color: var(--negative);
        }
    }
`