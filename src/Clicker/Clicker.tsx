import React, { SyntheticEvent, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { ClickerInner, ButtonToColor } from './ClickerStyles';
import { Header } from '../commonStyles';

export const Clicker = () => {
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [portalColor, setPortalColor] = useState('');
  
    const handleOpen = (color: string) => {
      setIsOpen(true);
      setCount(count + 1);
      setPortalColor(color);
    };

    const handleClose = () => setIsOpen(false);

    return (
        <ClickerInner>
            <Header>
                Clicks: {count}
            </Header>
            <ButtonToColor onClick={() => handleOpen('green')}>Open green portal</ButtonToColor>
            <ButtonToColor onClick={() => handleOpen('pink')}>Open pink portal</ButtonToColor>
            <Portal isOpen={isOpen} close={handleClose} numOfClicks={count} color={portalColor}/>
        </ClickerInner>
    )
}
