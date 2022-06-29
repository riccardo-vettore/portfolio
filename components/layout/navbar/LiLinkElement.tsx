import Link from 'next/link';
import React, {useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';

export interface LiLinkElementProps {
    index: number;
    isHome: boolean;
    url: string;
    name: string;
}

const LiLinkElement: React.FC<LiLinkElementProps & CSSTransitionProps> = (
    {
        index,
        isHome,
        url,
        name,
        ...rest
    }) => {

    const elementRef = useRef(null);
    return (
        <CSSTransition nodeRef={elementRef}
                       key={index}
                       {...rest}
        >
            <li ref={elementRef}
                key={index}
                style={{transitionDelay: `${isHome ? index * 100 : 0}ms`}}
            >
                <Link href={url}>{name}</Link>
            </li>
        </CSSTransition>
    )
}

export default LiLinkElement;