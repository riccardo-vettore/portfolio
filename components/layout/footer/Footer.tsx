import StyledFooter from './StyledFooter';
import StyledSocialLinks from './StyledSocialLinks';
import {socialItems} from '../social/models/social-items';
import Icon from '../icon/Icon';

const Footer = () => {
    return (
        <StyledFooter>
            <StyledSocialLinks>
                <ul>
                    {
                        socialItems && socialItems.map(({url, name, iconType}, index) => (
                            <li key={index}>
                                <a href={url} aria-label={name}>
                                    <Icon iconType={iconType}/>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </StyledSocialLinks>
        </StyledFooter>
    )
}

export default Footer;