import styled from 'styled-components';
import {StyledHamburgerButtonProps} from './models/styled-hamburger-button-props';
import {Theme} from '../../../styles/theme';

const StyledHamburgerButton = styled.button<StyledHamburgerButtonProps>`
  display: none;
  @media (max-width: 768px) {
    ${({theme}: { theme: Theme }) => theme.mixins.fCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--yellow);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${({menuOpen}) => (menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${({menuOpen}) => (menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)});

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--yellow);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &:before {
      width: ${({menuOpen}) => (menuOpen ? `100%` : `120%`)};
      top: ${({menuOpen}) => (menuOpen ? `0` : `-10px`)};
      opacity: ${({menuOpen}) => (menuOpen ? 0 : 1)};
      transition: ${({menuOpen}) =>
              menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }

    &:after {
      width: ${({menuOpen}) => (menuOpen ? `100%` : `80%`)};
      bottom: ${({menuOpen}) => (menuOpen ? `0` : `-10px`)};
      transform: rotate(${({menuOpen}) => (menuOpen ? `-90deg` : `0`)});
      transition: ${({menuOpen}) => (menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }
`;

export default StyledHamburgerButton;