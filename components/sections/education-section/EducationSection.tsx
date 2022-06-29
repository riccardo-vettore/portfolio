import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {BaseProps} from '../../layout/navbar/models/base-props';
import StyledEducationSection from './StyledEducationSection';
import StyledTabList from './StyledTabList';
import StyledTabButton from './StyledTabButton';
import StyledTabPanels from './StyledTabPanels';
import {KEY_CODES} from '../../../shared/utils';
import StyledTabPanel from './StyledTabPanel';
import usePrefersReducedMotion from '../../../hooks/usePrefersReducedMotion';
import {Fade} from 'react-awesome-reveal';

const EducationSection = ({locale}: BaseProps) => {
    const [activeTabId, setActiveTabId] = useState(0);
    const [tabFocus, setTabFocus] = useState<number | null>(null);
    const tabs = useRef([] as (HTMLButtonElement | null)[]);
    const prefersReducedMotion = usePrefersReducedMotion();

    const focusTab = () => {
        if (tabFocus === null) {
            return;
        }
        if (tabs.current[tabFocus]) {
            tabs.current[tabFocus]?.focus();
            return;
        }
        // If we're at the end, go to the start
        if (tabFocus >= tabs.current.length) {
            setTabFocus(0);
        }
        // If we're at the start, move to the end
        if (tabFocus < 0) {
            setTabFocus(tabs?.current.length - 1);
        }
    };

    useEffect(() => focusTab(), [tabFocus]);


    const onKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case KEY_CODES.ARROW_UP: {
                e.preventDefault();
                if (!tabFocus) {
                    break;
                }
                setTabFocus(tabFocus - 1);
                break;
            }

            case KEY_CODES.ARROW_DOWN: {
                e.preventDefault();
                if (!tabFocus) {
                    break;
                }
                setTabFocus(tabFocus + 1);
                break;
            }

            default: {
                break;
            }
        }
    };

    const items = [
        {
            tabTitle: {
                it: 'Università',
                en: 'University'
            },
            title: {
                it: 'Università degli Studi di Padova',
                en: 'University of Padua'
            },
            range: {
                it: '2013 - 2017 // Padova, PD',
                en: '2013 - 2017 // Padua, Italy'
            },
            description: {
                it: `Laurea triennale in Ingegneria Informatica <br><br> Thesis: Integrated development environments for data analysis: RStudio Server case study`,
                en: `B.S in Computer Engineering. <br><br> Thesis: Integrated development environments for data analysis: RStudio Server case study`
            },
            url: 'https://lauree.dei.unipd.it/lauree/ingegneria-informatica/'
        },
        {
            tabTitle: {
                it: 'Master',
                en: 'Master'
            },
            title: {
                it: 'Experis Academy',
                en: 'Experis Academy'
            },
            range: {
                it: '2017 - 2017 // Maranello, MO',
                en: '2017 - 2017 // Maranello, Italy'
            },
            description: {
                it: 'Master Motorcycle Race Engineering',
                en: 'Master Motorcycle Race Engineering'
            },
            url: 'https://www.experisacademy.it/it/master-motorsport/master-motorcycle-race-engineering'
        },
        {
            tabTitle: {
                it: 'Scuola superiore',
                en: 'High school'
            },
            title: {
                it: 'Istituto Tecnico G.B Belzoni',
                en: 'Istituto Tecnico G.B Belzoni'
            },
            range: {
                it: '2007 - 2012 // Padova, PD',
                en: '2007 - 2012 // Padua, Italy'
            },
            description: {
                it: 'Diploma di maturità tecnica Geometra.',
                en: 'Diploma di maturità tecnica Geometra.'
            },
            url: 'https://www.itbelzoni.edu.it/'
        }
    ]

    return (
        <StyledEducationSection id="education">
            <Fade triggerOnce={true}
                  duration={prefersReducedMotion ? 0 : 1000}
            >
                <h2 className="numbered-heading">
                    {
                        locale === 'it' ? 'Istruzione/Formazione' : 'Education'
                    }
                </h2>
            </Fade>
            <Fade delay={prefersReducedMotion ? 0 : 500}
                  duration={prefersReducedMotion ? 0 : 1000}
                  triggerOnce={true}
            >
                <div className="inner">
                    <StyledTabList role="tablist"
                                   aria-label="Education tabs"
                                   onKeyDown={(e: React.KeyboardEvent) => onKeyDown(e)}>
                        {
                            items.map((item, i) => {
                                const {tabTitle} = item;
                                return (
                                    <StyledTabButton
                                        key={i}
                                        isActive={activeTabId === i}
                                        onClick={() => setActiveTabId(i)}
                                        ref={(el: HTMLButtonElement) => (tabs.current[i] = el)}
                                        id={`tab-${i}`}
                                        role="tab"
                                        tabIndex={activeTabId === i ? 0 : -1}
                                        aria-selected={activeTabId === i}
                                        aria-controls={`panel-${i}`}
                                    >
                                        <span>{locale === 'it' ? tabTitle.it : tabTitle.en}</span>
                                    </StyledTabButton>
                                )
                            })}
                    </StyledTabList>
                    <StyledTabPanels>
                        {
                            items.map((item, i) => {
                                const {title, description, url, range} = item;
                                return (
                                    <StyledTabPanel
                                        key={i}
                                        id={`panel-${i}`}
                                        role="tabpanel"
                                        aria-labelledby={`tab-${i}`}
                                        aria-hidden={activeTabId !== i}
                                        hidden={activeTabId !== i}>
                                        <h3>
                                        <span className="school">
                                            &nbsp;@&nbsp;
                                            <a href={url} target="_blank" className="inline-link">
                                                {locale === 'it' ? title.it : title.en}
                                            </a>
                                          </span>
                                        </h3>
                                        <p className="range">
                                            {locale === 'it' ? range.it : range.en}
                                        </p>
                                        <div
                                            dangerouslySetInnerHTML={{__html: locale === 'it' ? description.it : description.en}}/>
                                    </StyledTabPanel>
                                )
                            })
                        }
                    </StyledTabPanels>
                </div>
            </Fade>
        </StyledEducationSection>
    )
}

export default EducationSection;