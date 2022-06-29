import styled from 'styled-components';
import {Theme} from '../../../styles/theme';

const StyledFooter = styled.footer`
  ${({theme}: { theme: Theme }) => theme.mixins.fCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

export default StyledFooter;