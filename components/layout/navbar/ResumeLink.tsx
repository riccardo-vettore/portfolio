import {ResumeLinkProps} from './models/resume-link-props';

const ResumeLink = ({locale}: ResumeLinkProps) => {
    return (
        <a className="resume-button" href={locale === 'it' ? '/files/cv-it.pdf' : '/files/cv-en.pdf'} target="_blank" rel="noopener noreferrer">
            {locale === 'it' ? 'Curriculum' : 'Resume'}
        </a>
    )
}

export default ResumeLink;