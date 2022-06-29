import styled from 'styled-components';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner-container {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export default StyledAboutSection;