import styled from 'styled-components';
import {SideOrientation} from './Side';

const StyledSideElement = styled.div<{ orientation: SideOrientation }>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${({orientation}) => (orientation === SideOrientation.Left ? '40px' : 'auto')};
  right: ${({orientation}) => (orientation === SideOrientation.Left ? 'auto' : '40px')};
  z-index: 10;
  color: var(--light-slate);
  @media (max-width: 1080px) {
    left: ${({orientation}) => (orientation === SideOrientation.Left ? '20px' : 'auto')};
    right: ${({orientation}) => (orientation === SideOrientation.Left ? 'auto' : '20px')};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export default StyledSideElement;