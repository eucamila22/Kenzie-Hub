import styled from "styled-components";

export const BoxContainerModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;    
    background: rgba(18, 18, 20, 0.5);

    animation: transition 1.4s ease;
`

export const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 296px;
    max-width: 375px;
    height: 320px;
    background: var(--grey-3);
    border-radius: var(--radius);
    box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);    

    header {
        width: 296px;
        max-width: 375px;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background: var(--grey-2);
        border-radius: var(--radius) var(--radius) 0px 0px;
        
        p{
            font-weight: var(--weight1);
            font-size: var(--text4);
            color: var(--grey-0);
        }

        .closeModal {
            width: 40px;
            height: 40px;
            background-color: transparent;
            color: var(--grey-3);
            font-weight: 600;
            padding: 10px;
            cursor: pointer;
        }

        .closeModal:hover {
            background-color: transparent;
        }
    }

    form div {
        /* width: 95%; */
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 20px;
        gap: 10px;

        input, select {        
            width: 98%;
            height: 50px;
            background: var(--grey-2);
            border: 1px solid var(--grey-2);
            border-radius: var(--radius);
            padding-left: 10px;
            color: var(--grey-0);
        }

        input:focus {        
            border: 1px solid var(--grey-0);
        }

        select:focus {        
            border: 1px solid var(--grey-0);
        }

        label {
            font-size: var(--text2);
            font-weight: var(--weight4);
            color: var(--grey-0);
        }
    }

    .divBtn > button {
        width: 98%;
        height: 50px;
        background: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: var(--radius);
        color: var(--grey-0);
        margin-bottom: 10px;
        font-size: var(--text1);
    }

    .divBtn > button:focus {
        background: var(--color-primary-Focus);
        border: 1px solid var(--color-primary-Focus);
    }

    .divBtnEditDelete {
        width: 93%;
        display: flex;
        flex-direction: row;
    }

    .save {
        width: 60%;
        height: 50px;
        background: var(--color-primary-Negative);
        border: 1px solid var(--color-primary-Negative);
        border-radius: var(--radius);
        color: var(--grey-0);
        margin-bottom: 10px;
        font-size: var(--text4);
        font-weight: var(--weight3);
    }

    .delete {
        width: 40%;
        height: 50px;
        background: var(--grey-1);
        border: 1px solid var(--grey-1);
        border-radius: var(--radius);
        color: var(--grey-0);
        margin-bottom: 10px;
        font-size: var(--text4);
        font-weight: var(--weight3);
    }

    @media (min-width: 768px) {
        width: 375px;
        height: 320px;

        header {
            width: 375px;
        }

        form button {
            width: 90%;
            height: 50px;
            background: var(--color-primary);
            border: 1px solid var(--grey-0);
            border-radius: var(--radius);
            color: var(--grey-0);
        }
    }
`