import Side, {SideOrientation} from '../side/Side';
import StyledSocialList from './StyledSocialList';
import {socialItems} from './models/social-items';
import Icon from '../icon/Icon';

export interface SocialProps {
    isHome: boolean;
    loaderDelay: number;
}

const Social = ({isHome, loaderDelay}: SocialProps) => {
    return (
        <Side isHome={isHome}
              orientation={SideOrientation.Right}
              loaderDelay={loaderDelay}
        >
            <StyledSocialList>
                {
                    socialItems && socialItems.map(({url, name, iconType}, index) => (
                        <li key={index}>
                            <a href={url}
                               aria-label={name}
                               target="_blank"
                               rel="noreferrer"
                            >
                                <Icon iconType={iconType}/>
                            </a>
                        </li>
                    ))
                }
            </StyledSocialList>
        </Side>
    )
}

export default Social;