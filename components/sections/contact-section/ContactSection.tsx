import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';
import {BaseProps} from '../../layout/navbar/models/base-props';
import StyledContactSection from './StyledContactSection';

export interface ContactProps extends BaseProps{
    email: string;
}

const Contact = ({locale, email}: ContactProps) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <StyledContactSection id="contact">
            <h2 className="numbered-heading overline">
                {
                    locale === 'it' ? 'Cos\'altro?' : 'What’s Next?'
                }
            </h2>
            <h2 className="title">
                {
                    locale === 'it' ? 'Contattami' : 'Get In Touch'
                }
            </h2>
            <p>
                {
                    locale === 'it' ? <>
                        Sono sempre alla ricerca di nuove sfide, la mia casella di posta è sempre aperta.
                        Per qualsiasi domanda non esitare a contattarmi, farò del mio meglio per risponderti quanto prima!
                    </> : <>
                        I'm always looking for new challenges, my inbox is always open.
                        Whether you have a question, I’ll try my best to get back to you!
                    </>
                }
            </p>

            <a className="email-link" href={`mailto:${email}`}>
                {
                    locale === 'it' ? 'Contattami' : 'Contact me'
                }
            </a>
        </StyledContactSection>
    );
};

export default Contact;