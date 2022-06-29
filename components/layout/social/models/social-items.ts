import {IconType} from '../../icon/models/icon-type';

export interface SocialItem {
    name: string;
    url: string;
    iconType: IconType;
}


export const socialItems: SocialItem[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/riccardo-vettore',
        iconType: IconType.IconGitHub
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/riccardo-vettore-dev',
        iconType: IconType.IconLinkedin
    },
    /*
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        iconType: IconType.IconInstagram
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com',
    },
    {
        name: 'Codepen',
        url: 'https://codepen.io',
    }*/
]