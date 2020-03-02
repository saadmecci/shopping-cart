import styled from 'styled-components';

export const Card = styled.div`
    display: inline-block;
    flex-direction: column;
    height: fit-content;
    width: 200px;
    background-color: ${props => props.backgroundColor}
    border: 1px light grey;
    border-radius: 10px;
    margin: 20px 10px 10px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    .title {
        text-align: center;
        color: white;
        font-weight: bold;
        line-space: 2px;
        padding-top: 10px;
        padding-left: 10px;
    }
    .content {
        color: white;
        padding: 8px 0px 10px 15px;
    }
`;

export const ShoppingCartCard = styled(Card)`
    background-color: #464159;
    cursor: pointer;
    height: 80px;
    width: 430px;
`;