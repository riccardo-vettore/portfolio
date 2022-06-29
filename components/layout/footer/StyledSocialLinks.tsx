import styled from 'styled-components';
import {Theme} from '../../../styles/theme';

const StyledSocialLinks = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({theme}: { theme: Theme }) => theme.mixins.fBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export default StyledSocialLinks;