import styled from 'styled-components';
import { Button } from '../commonStyles';

export const ClickerInner = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    justify-content: center;
`;

export const ButtonToColor = styled(Button)`
    &:not(:last-child){
        margin-bottom: 12px;
    }
`
