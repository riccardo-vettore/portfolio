import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Theme} from '../../../styles/theme';
// @ts-ignore
//import anime from 'animejs/lib/anime.es.js';
import IconLoader from '../icon/IconLoader';

export interface LoaderProps {
    finishLoading: () => void;
}

const StyledLoader = styled.div<{ isMounted: boolean }>`
  ${({theme}: { theme: Theme }) => theme.mixins.fCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};

    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;

      #B {
        opacity: 0;
      }
    }
  }
`;

const Loader = ({finishLoading}: LoaderProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const animate = () => {
        setTimeout(() => {
            finishLoading()
        }, 1000)
    };
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <StyledLoader className="loader" isMounted={isMounted}>
            <div className="logo-wrapper">
                <IconLoader/>
            </div>
        </StyledLoader>
    );
}

export default Loader;