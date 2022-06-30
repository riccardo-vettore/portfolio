import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import StyledHeader from './StyledHeader';
import StyledNavbar from './StyledNavbar';
import Logo from './Logo';
import ResumeLink from './ResumeLink';
import StyledLinks from './StyledLinks';
import LiLinkElement from './LiLinkElement';
import {ScrollDirection} from './models/scroll-direction';
import {NavbarProps} from './models/navbar-props';
import {navbarLinks, NavbarLinks} from './models/navbar-links';
import RightMenu from '../right-menu/RightMenu';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';
import useScrollDirection from '../../../hooks/useScrollDirection';
import Language from './Language';

const Navbar = ({isHome, loaderDelay, locale, locales}: NavbarProps) => {
    const [isMounted, setMounted] = useState(!isHome);
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const scrollDirection: ScrollDirection = useScrollDirection(ScrollDirection.Down);
    const prefersReducedMotion = usePrefersReducedMotion();

    const fadeClass = isHome ? 'fade' : '';
    const fadeDownClass = isHome ? 'fadedown' : '';
    const timeout = isHome ? loaderDelay : 0;

    // workaround for CSSTransaction
    // https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
    const logoRef = useRef(null);
    const resumeLinkRef = useRef(null);
    const rightMenuRef = useRef(null);

    const handleScroll = () => {
        setScrolledToTop(window.scrollY < 450);
    };

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => {
            setMounted(true);
        }, 0);

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <StyledHeader scrollDirection={scrollDirection}
                      scrolledToTop={scrolledToTop}
        >
            <StyledNavbar>
                {
                    prefersReducedMotion ? (
                        <>
                            <Logo isHome={isHome}/>
                            <StyledLinks>
                                <ol>
                                    {
                                        navbarLinks && navbarLinks.map(({name, url, language}: NavbarLinks, index) => (
                                                language === locale &&
                                                <li key={index}>
                                                    <Link href={url}>{name}</Link>
                                                </li>
                                            )
                                        )
                                    }
                                </ol>
                                <div>
                                    <ResumeLink locale={locale} locales={locales}/>
                                </div>
                                <div>
                                    <Language locale={locale}/>
                                </div>
                            </StyledLinks>
                            <RightMenu locale={locale} locales={locales}/>
                        </>
                    ) : (
                        <>
                            <TransitionGroup component={null}>
                                {
                                    isMounted && (
                                        <CSSTransition nodeRef={logoRef} classNames={fadeClass} timeout={timeout}>
                                            <div ref={logoRef}>
                                                <Logo isHome={isHome}/>
                                            </div>
                                        </CSSTransition>
                                    )
                                }
                            </TransitionGroup>
                            <StyledLinks>
                                <ol>
                                    <TransitionGroup component={null}>
                                        {
                                            isMounted && navbarLinks
                                            && navbarLinks.map(({name, url, language}, index) => (
                                                locale === language && (
                                                    <LiLinkElement index={index}
                                                                   isHome={isHome}
                                                                   url={url}
                                                                   name={name}
                                                                   key={index}
                                                                   classNames={fadeDownClass}
                                                                   timeout={timeout}
                                                    />
                                                )
                                            ))
                                        }
                                    </TransitionGroup>
                                </ol>
                                <TransitionGroup component={null}>
                                    {isMounted && (
                                        <CSSTransition classNames={fadeDownClass}
                                                       timeout={timeout}
                                                       nodeRef={resumeLinkRef}
                                        >
                                            <div ref={resumeLinkRef}
                                                 style={{transitionDelay: `${isHome ? navbarLinks.length * 100 : 0}ms`}}
                                            >
                                                <ResumeLink locale={locale} locales={locales}/>
                                                <Language locale={locale}/>
                                            </div>
                                        </CSSTransition>
                                    )}
                                </TransitionGroup>
                            </StyledLinks>
                            <TransitionGroup component={null}>
                                {
                                    isMounted && (
                                        <CSSTransition nodeRef={rightMenuRef}
                                                       classNames={fadeClass}
                                                       timeout={timeout}
                                        >
                                            <RightMenu locale={locale}
                                                       locales={locales}
                                                       ref={rightMenuRef}
                                            />
                                        </CSSTransition>
                                    )
                                }
                            </TransitionGroup>
                        </>
                    )
                }
            </StyledNavbar>
        </StyledHeader>
    )
}

export default Navbar;