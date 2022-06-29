import styled from 'styled-components';
import {Theme} from '../../../styles/theme';
import {StyledSidebarProps} from './models/styled-sidebar-props';

const StyledSidebar = styled.aside<StyledSidebarProps>`
  display: none;
  @media (max-width: 768px) {
    ${({theme}: { theme: Theme }) => theme.mixins.fCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--light-navy);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: translateX(${({menuOpen}) => (menuOpen ? 0 : 100)}vw);
    visibility: ${({menuOpen}) => (menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }

  nav {
    ${({theme}: { theme: Theme }) => theme.mixins.fBetween}
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));
      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: var(--yellow);
        font-size: var(--fz-sm);
      }
    }

    a {
      ${({theme}: { theme: Theme }) => theme.mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }

  .resume-link {
    ${({theme}: { theme: Theme }) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`

export default StyledSidebar;