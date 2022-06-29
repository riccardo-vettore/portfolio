import styled from 'styled-components';

const StyledEducationSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;
    @media (max-width: 600px) {
      display: block;
    }
    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
`

export default StyledEducationSection;