import {BaseProps} from '../../layout/navbar/models/base-props';
import StyledSkillsGrid from './StyledSkillsGrid';
import StyledSkill from './StyledSkill';
import Image from 'next/image';
import {Fade} from 'react-awesome-reveal';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';

const SkillsSection = ({locale}: BaseProps) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    const skills = [
        {
            title: 'Front-end',
            items: [
                {
                    it: 'Creare applicazioni enterprise multi-tenant, multi language attraverso l\'utilizzo del framework Angular',
                    en: 'I create multi-tenant, multi-language enterprise applications with Angular'
                },
                {
                    it: 'Migro applicazioni da AngularJS ad Angular',
                    en: 'I migrate applications from AngularJS to Angular'
                },
                {
                    it: 'Sviluppo applicazioni attraverso l\'utilizzo della libreria ReactJS',
                    en: 'I create applications with ReactJS library and NextJS'
                },
                {
                    it: 'Sviluppp siti statici utlizzando NextJS e Typescript',
                    en: 'Developed static site using NextJS and Typescript'
                },
                {
                    it: 'Creo componenti stateless per renderli quanto più riutilizzabili all\'interno dell\'applicazione',
                    en: 'I create stateless components for use them where ever in the application'
                }
            ],
            languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS/SASS'],
            imgUrl: '/images/fe_v2.png'
        },
        {
            title: 'Libraries & Frameworks',
            items: [
                {
                    it: 'Angular, RXJS, NGRX',
                    en: 'Angular, RXJS, NGRX'
                },
                {
                    it: 'React, NextJS, Redux',
                    en: 'React, NextJS, Redux'
                },
                {
                    it: 'Bootstrap, Angular Material, PrimeNG, DevExpress, Metronic, OpenLayer, Leaflet',
                    en: 'Bootstrap, Angular Material, PrimeNG, DevExpress, Metronic, OpenLayer, Leaflet'
                }
            ],
            languages: [''],
            imgUrl: '/images/fe-libraries-framework.png'
        },
        {
            title: 'Back-end',
            items: [
                {
                    it: 'Disegnato, implementato e documentato nuovi applicativi utilizzando .NET Core and Docker',
                    en: 'Designed, documented, and implemented new web apps using .NET Core and Docker'
                },
                {
                    it: 'Progettare basi dati, attraverso database relazionali, per progetti enterprise',
                    en: 'Designed and implemented relational database for enterprise projects'
                },
            ],
            languages: ['C#', 'SQL'],
            imgUrl: '/images/be.png'
        },
        {
            title: 'Tools & Platforms',
            items: [
                {
                    it: 'Utilizzo  GIT come System Versioning',
                    en: 'Work with GIT System Versioning'
                },
                {
                    it: 'Utilizzo Github per mantenere il software',
                    en: 'Maintain my software on GitHub'
                },
                {
                    it: 'Ho progettato e sviluppato dashboard di monitoraggio attraverso Elasticsearch, Prometheus e Grafana come metriche run-time per Docker',
                    en: 'Deployed a centralized monitoring environment (Grafana, Prometheus) which gather system metrics as well as Docker run‐time metrics'
                },
                {
                    it: 'Lavoro con lo stack applicativo Atlassian: Jira, Confluence',
                    en: 'Work with Atlassian applications stack: Jira, Confluence'
                }
            ],
            languages: [''],
            imgUrl: '/images/tools.png'
        }
    ];

    return (
        <section id="skills">
            <Fade triggerOnce={true}
                  duration={prefersReducedMotion ? 0 : 1000}
            >
                <h2 className="numbered-heading">
                    {locale === 'it' ? 'Le mie skills' : 'My skills'}
                </h2>
            </Fade>
            <StyledSkillsGrid>
                {
                    skills.map((skill, i) => (
                        <StyledSkill key={i}>
                            <div className="skill-content">
                                <div>
                                    <h3 className="project-title">
                                        <Fade delay={prefersReducedMotion ? 0 : 500}
                                              duration={prefersReducedMotion ? 0 : 1000}
                                              triggerOnce={true}
                                        >
                                            <a>{skill.title}</a>
                                        </Fade>
                                    </h3>
                                    <div className="skill-description">
                                        <Fade delay={prefersReducedMotion ? 0 : 500}
                                              duration={prefersReducedMotion ? 0 : 1000}
                                              triggerOnce={true}
                                        >
                                            <ul>
                                                {
                                                    skill.items.map((item, i) => (
                                                        <li key={i}>{
                                                            locale === 'it' ? item.it : item.en
                                                        }</li>
                                                    ))
                                                }
                                            </ul>
                                        </Fade>
                                    </div>
                                    <Fade delay={prefersReducedMotion ? 0 : 500}
                                          duration={prefersReducedMotion ? 0 : 1000}
                                          triggerOnce={true}
                                    >
                                        <ul className="skill-tech-list">
                                            {
                                                skill.languages.map((lang, i) => (
                                                    <li key={i}>
                                                        {lang}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Fade>
                                </div>
                            </div>
                            <div className="skill-image">
                                <Fade delay={prefersReducedMotion ? 0 : 500}
                                      duration={prefersReducedMotion ? 0 : 1000}
                                      triggerOnce={true}
                                >
                                    <a>
                                        <Image src={skill.imgUrl}
                                               alt="Picture of the author"
                                               className="img"
                                               width={674}
                                               height={451}
                                               layout="responsive"
                                        />
                                    </a>
                                </Fade>
                            </div>
                        </StyledSkill>
                    ))
                }
            </StyledSkillsGrid>
        </section>
    )
}

export default SkillsSection;