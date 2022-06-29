import {IconType} from './models/icon-type';
import IconGitHub from './IconGitHub';
import IconInstagram from './IconInstagram';
import IconLinkedin from './IconLinkedin';

const Icon = ({iconType}: {iconType: IconType}) => {
    switch (iconType) {
        case IconType.IconGitHub:
            return <IconGitHub/>
        case IconType.IconInstagram:
            return <IconInstagram/>
        case IconType.IconLinkedin:
            return <IconLinkedin/>
    }
}

export default Icon;