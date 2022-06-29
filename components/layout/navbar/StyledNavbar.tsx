import styled from 'styled-components';
import {Theme} from '../../../styles/theme';

const StyledNavbar = styled.nav`
  ${({theme}: { theme: Theme }) => theme.mixins.fBetween}
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({theme}: { theme: Theme }) => theme.mixins.fCenter}
    a {
      color: var(--yellow);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--yellow-tint);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`

export default StyledNavbar;