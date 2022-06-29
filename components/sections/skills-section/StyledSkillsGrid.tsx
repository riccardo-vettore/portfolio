import styled from 'styled-components';
import {Theme} from '../../../styles/theme';

const StyledSkillsGrid = styled.ul`
  ${({theme}: { theme: Theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`

export default StyledSkillsGrid;