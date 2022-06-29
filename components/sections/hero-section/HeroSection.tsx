import {TransitionGroup} from 'react-transition-group';
import {ReactElement, useEffect, useState} from 'react';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';
import StyledHeroSection from './StyledHeroSection';
import {BaseProps} from '../../layout/navbar/models/base-props';
import HeroSectionItem from './HeroSectionItem';

export interface HeroSectionProps extends BaseProps {
    loaderDelay: number;
    navbarDelay: number;
}

const HeroSection = ({loaderDelay, navbarDelay, locale}: HeroSectionProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    const isLocaleIt = () => {
        return locale === 'it'
    }

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => setIsMounted(true), navbarDelay);
        return () => clearTimeout(timeout);
    }, []);

    const one: ReactElement = <h1>{isLocaleIt() ? 'Ciao, mi chiamo' : 'Hi, my name is'}</h1>;
    const two: ReactElement = <h2 className="big-heading">Riccardo Vettore.</h2>;
    const three: ReactElement = <h3 className="big-heading">Software Engineer.</h3>;
    const four: ReactElement = (
        <>
            <p>
                {
                    isLocaleIt() ?
                        'Sono un appassionato ed esperto software engineer a Padova, Italia.'
                        :
                        'I’m a passionate and experienced software engineer from Padua, Italy.'
                }
            </p>
        </>
    );

    const items: ReactElement[] = [one, two, three, four];

    return (
        <StyledHeroSection>
            {
                prefersReducedMotion ? (
                    <>
                        {
                            items.map((item, i) => (
                                <div key={i}>{item}</div>
                            ))
                        }
                    </>
                ) : (
                    <TransitionGroup component={null}>
                        {
                            isMounted && items.map((item, i) => (
                                <HeroSectionItem index={i}
                                                 key={i}
                                                 classNames="fadeup"
                                                 timeout={loaderDelay}
                                                 element={item}
                                />
                            ))
                        }
                    </TransitionGroup>
                )
            }
        </StyledHeroSection>
    );
};

export default HeroSection;