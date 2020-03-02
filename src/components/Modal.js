import styled from 'styled-components';

const Modal = styled.div`
    display: ${props => props.display === "block" ? "block":"none"}
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 55%;
    width: 55%;
    padding: 30px 50px 50px 50px;
    overflow: auto;
    background-color: #FFAFB0;
    color: white;
    z-index: 2;
    border-radius: 10px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 10px 25px 0 rgba(0, 0, 0, 0.19);
    .title {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }
    .content {
        text-align: center;
    }
    .button-container {
        display: flex;
        position: absolute;
        bottom: 10px;
        right: 13px;
    }
`;

export default Modal;