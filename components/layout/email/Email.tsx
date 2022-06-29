import Side, {SideOrientation} from '../side/Side';
import StyledLinkWrapper from './StyledLinkWrapper';

export interface EmailProps {
    isHome: boolean;
    loaderDelay: number;
    email: string
}

const Email = ({isHome, loaderDelay, email}: EmailProps) => {
    return (
        <Side isHome={isHome}
              orientation={SideOrientation.Left}
              loaderDelay={loaderDelay}
        >
            <StyledLinkWrapper>
                <a href={`mailto:${email}`}>{email}</a>
            </StyledLinkWrapper>
        </Side>
    )
}

export default Email;