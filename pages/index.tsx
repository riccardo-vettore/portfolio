import type {NextPage} from 'next'
import {GetStaticProps} from 'next';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';
import HeroSection from '../components/sections/hero-section/HeroSection';
import AboutSection from '../components/sections/about-section/AboutSection';
import SkillsSection from '../components/sections/skills-section/SkillsSection';
import EducationSection from '../components/sections/education-section/EducationSection';
import ContactSection from '../components/sections/contact-section/ContactSection';
import {email} from '../shared/utils';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Home: NextPage = ({locale, locales}: any) => {
    const loaderDelay = 2000;
    const navbarDelay = 600;

    return (
        <Layout locale={locale}
                locales={locales ?? []}
                loaderDelay={loaderDelay}
                email={email}
        >
            <StyledMainContainer className="fill-height">
                <HeroSection loaderDelay={loaderDelay}
                             navbarDelay={navbarDelay}
                             locale={locale}
                />
                <AboutSection locale={locale}/>
                <SkillsSection locale={locale}/>
                <EducationSection locale={locale}/>
                <ContactSection locale={locale}
                                email={email}
                />
            </StyledMainContainer>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({locale, locales}) => {
    return {
        props: {
            locale,
            locales,
        },
    }
}
export default Home;
