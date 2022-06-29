import React, {ReactElement, useRef} from 'react';
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';
import {CSSTransition} from 'react-transition-group';

export interface HeroSectionItem {
    index: number;
    element: ReactElement;
}

const HeroSectionItem: React.FC<HeroSectionItem & CSSTransitionProps> = (
    {
        index,
        element,
        ...rest
    }) => {
    const elementRef = useRef(null);

    return (
        <CSSTransition nodeRef={elementRef}
                       key={index}
                       {...rest}
        >
            <div ref={elementRef}
                 style={{transitionDelay: `${index + 1}00ms`}}
            >
                {element}
            </div>
        </CSSTransition>
    )
}

export default HeroSectionItem;