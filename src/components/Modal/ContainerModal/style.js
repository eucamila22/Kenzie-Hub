import styled from 'styled-components'

export const ContainerModalS = styled.div `
    width: 90%;
    max-width: 370px;
    padding-bottom: 15px;

    background: var(--grey-3);
    box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.25);
    border-radius: var(--radius);
    
    @media(min-width: 768px){
        width: 370px;
        max-width: 370px;
        height: 345px;
    }
`