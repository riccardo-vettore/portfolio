import React, {useState} from 'react';
import Link from 'next/link'
import StyledRightMenu from './StyledRightMenu';
import HamburgerButton from './HamburgerButton';
import StyledSidebar from './StyledSidebar';
import {navbarLinks} from '../navbar/models/navbar-links';
import {RightMenuProps} from './models/right-menu-props';
import Language from '../navbar/Language';

const RightMenu = React.forwardRef(({locale}: RightMenuProps, ref: React.Ref<HTMLDivElement>) => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <StyledRightMenu>
            <div ref={ref}>
                <HamburgerButton menuOpen={open} clickEvent={toggle}/>
                <StyledSidebar menuOpen={open}
                               aria-hidden={!open}
                               tabIndex={open ? 1 : -1}
                >
                    <nav>
                        {navbarLinks && (
                            <ol>
                                {
                                    navbarLinks.map(({url, name, language}, i) => (
                                        language === locale &&
                                        <li key={i}>
                                            <Link href={url} passHref>
                                                <a onClick={() => setOpen(false)}>
                                                    {name}
                                                </a>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ol>
                        )}

                        <a href={locale === 'it' ? '/files/cv-it.pdf' : '/files/cv-en.pdf'} target="_blank"
                           className="resume-link">
                            {locale === 'it' ? 'Curriculum' : 'Resume'}
                        </a>
                        <Language locale={locale}/>
                    </nav>
                </StyledSidebar>
            </div>
        </StyledRightMenu>
    )
})

export default RightMenu;