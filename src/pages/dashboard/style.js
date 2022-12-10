import styled from "styled-components";

export const DivDahs = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;  
`
 
export const ContainerDash = styled.div`
    width: 100vw;

    @media(min-width: 768px){
        width: 60%; 
        max-width: 1000px;
    }
`
export const NavBar = styled.div`
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    img {
        width: 105px;
        height: 15px;
    }

    a {
        height: 30px;
        color: var(--grey-0);
        border: var(--grey-3);
        background-color: var(--grey-3);
        border-radius: var(--radius);
        padding: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    a:hover {
        border: var(--grey-2);
        background-color: var(--grey-2);
    }

    @media(min-width: 768px){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
export const HeaderDash = styled.header`
    width: 100%;
    height: 118px;
    padding: 0 20px;
    margin-bottom: 40px;
    border-top: 2px solid var(--grey-2);
    border-bottom: 2px solid var(--grey-2);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    p { 
        font-weight: var(--weight1);
        font-size: var(--tile1);
        color: var(--grey-0);
    }

    small {
        font-weight: var(--weight4);
        font-size: var(--text3);
        color: var(--grey-1);
    }

  
    @media(min-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        div {
            width: 60%;
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
        }        
    }
`
export const SectionDashStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0 10px;
`

export const DivBtnDash = styled.div`
    width: 95%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--grey-0);

    button {
        width: 32px;
        height: 32px;
        text-align: center;
        background: var(--grey-3);
        border: none;
        border-radius: 4px;
        color: var(--grey-0);
        font-size: 20px;
        font-weight: var(--weight1);
        cursor: pointer;
    }

    button:hover {
        background: var(--grey-1);
    }
`

export const ListDash = styled.ul`
    width: 95%;
    max-width: 780px;
    height: 415px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background: var(--grey-3);
    border-radius: 4px;      
`
export const LiCardDash = styled.li`
    width: 95%;
    max-width: 895px;
    height: 48px;
    background: var(--grey-4);
    border-radius: 4px;
    margin: 22px 9px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    color: var(--grey-0);
    cursor: pointer;

    :hover {
        background: var(--grey-2);
    }
`