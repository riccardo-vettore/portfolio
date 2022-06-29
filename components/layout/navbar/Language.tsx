import {BaseProps} from './models/base-props';
import IconItalianFlag from '../icon/IconItalianFlag';
import IconUnionJackFlag from '../icon/IconUnionJackFlag';


const Language = ({locale}: BaseProps) => {
    return (
        <a className="language-button"
           href={locale === 'it' ? '/en' : '/it'}
        >
            {
                locale === 'it' ? (
                    <IconUnionJackFlag/>
                ) : (
                    <IconItalianFlag/>
                )
            }
        </a>
    )
}

export default Language;