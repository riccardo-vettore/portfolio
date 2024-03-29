import {useRef} from 'react';
import {Fade} from 'react-awesome-reveal';
import StyledAboutSection from './StyledAboutSection';
import StyledText from './StyledText';
import {BaseProps} from '../../layout/navbar/models/base-props';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';
import Image from 'next/image';
import StyledPic from './StyledPic';

const AboutSection = ({locale}: BaseProps) => {
    const containerRef = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <StyledAboutSection id="about" ref={containerRef}>
            <Fade triggerOnce={true}
                  duration={prefersReducedMotion ? 0 : 1000}
            >
                <h2 className="numbered-heading">
                    {
                        locale === 'it' ? 'About me' : 'About me'
                    }
                </h2>
            </Fade>
            <Fade delay={prefersReducedMotion ? 0 : 500}
                  duration={prefersReducedMotion ? 0 : 1000}
                  triggerOnce={true}
            >
                <div className="inner-container">
                    <StyledText>
                        <div>
                            <p>
                                {
                                    locale === 'it' ? (
                                        <>
                                            Benvenuto! Mi chiamo Riccardo e mi diverto a progettare e costruire oggetti
                                            che vivono nel web.
                                        </>
                                    ) : (
                                        <>
                                            Welcome! My name is Riccardo and I enjoy designing and building objects that
                                            live on the web.
                                        </>
                                    )
                                }
                            </p>
                            <p>
                                {
                                    locale === 'it' ? (
                                        <>
                                            Attualmente lavoro per <a href="https://www.thron.com/it" target="_blank">Thron S.P.A.</a> punto di riferimento per la trasformazione digitale dei processi di marketing dei brand più importanti al mondo.

                                        </>
                                    ) : (
                                        <>
                                            I currently work for <a href="https://www.thron.com/en" target="_blank">Thron S.P.A.</a> Thron is the world’s top brands’ partner of choice for the digital transformation of marketing processes.
                                        </>
                                    )
                                }
                            </p>
                            <p>
                                {
                                    locale === 'it' ? (
                                        <>
                                            Nel tempo libero mi piace studiare nuovi linguaggi, framework e librerie,
                                            sia in ambito
                                            Front-end che Back-end.
                                        </>
                                    ) : (
                                        <>
                                            In my free time, I study new languages, frameworks and libraries, both in
                                            the Front-end and Back-end fields.
                                        </>
                                    )
                                }
                            </p>
                        </div>
                    </StyledText>
                    <StyledPic>
                        <div className="wrapper">
                            <Image src="/images/profile.png"
                                   alt="Picture of the author"
                                   width={500}
                                   height={500}
                                   className="img"
                                   layout="responsive"
                            />
                        </div>
                    </StyledPic>
                </div>
            </Fade>
        </StyledAboutSection>
    )
}

export default AboutSection;