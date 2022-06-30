export interface NavbarLinks {
    language: 'en' | 'it',
    name: string,
    url: string
}


export const navbarLinks: NavbarLinks[] = [
    {
        language: 'en',
        name: 'About me',
        url: '#about'
    },
    {
        language: 'it',
        name: 'About me',
        url: '#about'
    },
    {
        language: 'en',
        name: 'Skills',
        url: '#skills'
    },
    {
        language: 'it',
        name: 'Skills',
        url: '#skills'
    },
    {
        language: 'en',
        name: 'Education',
        url: '#education'
    },
    {
        language: 'it',
        name: 'Formazione',
        url: '#education'
    },
    {
        language: 'en',
        name: 'Contact',
        url: '#contact'
    },
    {
        language: 'it',
        name: 'Contatti',
        url: '#contact'
    }
]