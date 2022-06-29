import StyledHamburgerButton from './StyledHamburgerButton';
import {HamburgerButtonProps} from './models/hamburger-button-props';

const HamburgerButton = (props: HamburgerButtonProps) => {
    return (
        <StyledHamburgerButton menuOpen={props.menuOpen} onClick={props.clickEvent}>
            <div className="ham-box">
                <div className="ham-box-inner"/>
            </div>
        </StyledHamburgerButton>
    )
}

export default HamburgerButton;