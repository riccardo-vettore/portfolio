import {BaseProps} from './models/base-props';
import IconItalianFlag from '../icon/IconItalianFlag';
import IconUnionJackFlag from '../icon/IconUnionJackFlag';
import styled from 'styled-components';

export const StyledLanguageButton = styled.a`
  margin-left: 30px;
  font-size: var(--fz-xs);
  max-width: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 30px;
    max-width: 30px;
  }
`

const Language = ({locale}: BaseProps) => {
    return (
        <StyledLanguageButton href={locale === 'it' ? '/en' : '/it'}>
            {
                locale === 'it' ? (
                    <IconUnionJackFlag/>
                ) : (
                    <IconItalianFlag/>
                )
            }
        </StyledLanguageButton>
    )
}

export default Language;