import styled, {css} from 'styled-components';
import {StyledHeaderProps} from './models/styled-header-props';
import {Theme} from '../../../styles/theme';
import {ScrollDirection} from './models/scroll-direction';

const StyledHeader = styled.header<StyledHeaderProps>`
  ${({theme}: { theme: Theme }) => theme.mixins.fBetween}
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${({scrolledToTop, scrollDirection}) =>
            scrollDirection === ScrollDirection.Up && !scrolledToTop
            && css`
              height: var(--nav-scroll-height);
              transform: translateY(0px);
              background-color: rgba(10, 25, 47, 0.85);
              box-shadow: 0 10px 30px -10px var(--navy-shadow);
            `};
    ${({scrolledToTop, scrollDirection}) =>
            scrollDirection === ScrollDirection.Down && !scrolledToTop
            && css`
              height: var(--nav-scroll-height);
              transform: translateY(calc(var(--nav-scroll-height) * -1));
              box-shadow: 0 10px 30px -10px var(--navy-shadow);
            `};
  }
`

export default StyledHeader;