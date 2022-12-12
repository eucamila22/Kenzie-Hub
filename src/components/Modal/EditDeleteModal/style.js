import styled from "styled-components";

export const HeaderModalEditDelete = styled.header`
    width: 100%;
    max-width: 370px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: var(--grey-2);
    border-radius: var(--radius) var(--radius) 0px 0px;     
        
    p {
        font-weight: var(--weight1);
        font-size: var(--text4);
        color: var(--grey-0);     
    }     

    .closeBtnEditDelete {
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: transparent;
        color: var(--grey-3);
        font-weight: var(--weight2);
        font-size: var(--text4);
        cursor: pointer;
    }

    .closeBtnEditDelete:hover {
        background-color: transparent;
    }
`
export const FormEditDelete = styled.form`
    width: 100%;
    max-width: 370px;
    height: 85%;
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .divInputEditDelete {
        width: 90%;
        height: 100px;

        display: flex;
        flex-direction: column;
    }

    input, select {
        width: 100%;
        height: 48px;
        background: var(--grey-2);
        border: 1px solid var(--grey-2);
        border-radius: var(--radius);
        padding-left: 10px;
        color: var(--grey-0);
    }

    label {
        margin-bottom: 5px;
        color: var(--grey-0);
        font-weight: var(--weight4);
        font-size: var(--text3);
    }

    .errorEditDelete {
        color: var(--negative);
    }

    .divBtnEditDelete {
        width: 90%;
        height: 48px;
        padding: 20px 0;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .btnEdit {
        width: 60%;
        height: 48px;

        background: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: var(--radius);

        font-weight: var(--weight2);
        font-size: var(--tile3);
        color: var(--grey-0);
    }

    .btnDelete {
        width: 40%;
        height: 48px;

        background: var(--grey-1);
        border: 1px solid var(--grey-2);
        border-radius: var(--radius);

        font-weight: var(--weight2);
        font-size: var(--tile3);
        color: var(--grey-0);
    }

    .btnEdit:focus {
        background: var(--color-primary-Focus);
        border: 1px solid var(--color-primary-Focus);
    }

    .btnEdit:disabled {
        background: var(--color-primary-Negative);
        border: 1px solid var(--color-primary-Negative);
    }

    .btnDelete:focus {
        background: var(--grey-2);
        border: 1px solid var(--grey-2);
    }

    .btnDelete:disabled {
        background: var(--grey-2);
        border: 1px solid var(--grey-2);
    }

    @media(min-width: 768px){
        margin-top: 20px;
    }
`