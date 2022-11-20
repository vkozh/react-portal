import React from 'react'
import ReactDOM from 'react-dom'
import { PortalContainer, PortalInner, ColoredHeader } from './PortalStyles';
import { Button } from '../commonStyles';
import { PORTAL_COLOR , PORTAL_HEADER_COLOR} from '../constants';

type IPortal = {
    isOpen: boolean;
    close: () => void;
    numOfClicks: number;
    color: string;
}

export const Portal = (props: IPortal) => {
    const { isOpen, close, numOfClicks, color } = props;
    const portalColor = PORTAL_COLOR[color];
    const portalHeaderColor = PORTAL_HEADER_COLOR[color];

    return isOpen
        ? ReactDOM.createPortal(
            <PortalContainer className='portal'>
                <PortalInner color={portalColor}>
                    <ColoredHeader color={portalHeaderColor}>Portal #{numOfClicks}</ColoredHeader>
                    <Button onClick={close} className='portal'>Close</Button>
                </PortalInner>
            </PortalContainer>,
            document.body
        )
        : null;
}
