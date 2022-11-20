import styled from 'styled-components';
import { Header } from '../commonStyles';

export const PortalContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #eee;
    display: flex;
`;

export const PortalInner = styled.div`
    background-color: ${props => props.color};
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    flex-direction: column;
    box-shadow: 0px 0px 6px #c4c4c4;
    border-radius: 10px;
`;

export const ColoredHeader = styled(Header)`
    color: ${props => props.color};
`
