import React, {useEffect, useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {theme} from '../../styles';
import GlobalStyles from '../../styles/GlobalStyles';
import Navbar from './navbar/Navbar';
import {useRouter} from 'next/router';
import Social from './social/Social';
import Email from './email/Email';
import Footer from './footer/Footer';
import {BaseProps} from './navbar/models/base-props';
import Loader from './loader/Loader';
import Head from 'next/head';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export interface LayoutProps extends BaseProps {
    children: React.ReactNode;
    loaderDelay: number;
    email: string;
}

export const Layout = ({children, locale, locales, loaderDelay, email}: LayoutProps) => {
    const router = useRouter();
    const isHome = router.pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);

    // Sets target="_blank" rel="noopener noreferrer" on external links
    const handleExternalLinks = () => {
        const allLinks = Array.from(document.querySelectorAll('a'));
        if (allLinks.length > 0) {
            allLinks.forEach(link => {
                if (link.host !== window.location.host) {
                    link.setAttribute('rel', 'noopener noreferrer');
                    link.setAttribute('target', '_blank');
                }
            });
        }
    };

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (location.hash) {
            const id = location.hash.substring(1); // location.hash without the '#'
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView();
                    el.focus();
                }
            }, 0);
        }

        handleExternalLinks();
    }, [isLoading]);

    return (
        <>
            <Head>
                <title>Riccardo Vettore - Software Engineer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="description" content="Riccardo Vettore is a software engineer"/>
                <meta name="image" content="https://www.riccardovettore.dev/images/logo_dark.png"/>

                <meta property="og:title" content="Riccardo Vettore - Software Engineer"/>
                <meta property="og:description" content="Riccardo Vettore is a software engineer"/>
                <meta property="og:image" content="https://www.riccardovettore.dev/images/logo_dark.png"/>
                <meta property="og:url" content="https://www.riccardovettore.dev"/>
                <meta property="og:type" content="website"/>
            </Head>
            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyles/>
                    <a className="skip-to-content" href="#content">
                        Skip to Content
                    </a>
                    {
                        isLoading && isHome ? (
                            <Loader finishLoading={() => setIsLoading(false)}/>
                        ) : (
                            <StyledContent>
                                <Navbar isHome={isHome}
                                        loaderDelay={loaderDelay}
                                        locale={locale}
                                        locales={locales ?? []}
                                />
                                <Social isHome={isHome} loaderDelay={loaderDelay}/>
                                <Email isHome={isHome}
                                       loaderDelay={loaderDelay}
                                       email={email}
                                />
                                <div id="content">
                                    {children}
                                    <Footer/>
                                </div>
                            </StyledContent>
                        )
                    }
                </ThemeProvider>
            </div>
        </>
    );
}

export default Layout;