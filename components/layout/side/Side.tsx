import React from 'react';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';
import StyledSideElement from './StyledSide';
import {Fade} from 'react-awesome-reveal';

export interface SideProps {
    children: React.ReactNode;
    isHome: boolean;
    orientation: SideOrientation,
    loaderDelay: number;
}

export enum SideOrientation {
    Left,
    Right
}

const Side = ({children, isHome, orientation, loaderDelay}: SideProps) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <StyledSideElement orientation={orientation}>
            {
                prefersReducedMotion ? (
                    <>{children}</>
                ) : (
                    <Fade delay={isHome ? loaderDelay : 0}>
                        <>{children}</>
                    </Fade>
                )
            }
        </StyledSideElement>
    )
}

export default Side;