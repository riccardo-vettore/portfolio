import IconLogo from '../icon/IconLogo';
import Link from 'next/link'

export interface LogoProps {
    isHome: boolean;
}

const Logo = ({isHome}: LogoProps) => {
    return (
        <div className="logo" tabIndex={-1}>
            {
                isHome ? (
                    <a href="/" aria-label="home">
                        <IconLogo/>
                    </a>
                ) : (
                    <Link href="/" aria-label="home">
                        <IconLogo/>
                    </Link>
                )
            }
        </div>
    )
}

export default Logo;