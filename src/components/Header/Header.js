import Logo from "../Logo/Logo";
import OutGoing from '../../assets/icons/ImageIcons/outgoing.png';
import ShadowedWrapper from "../ShadowedWrapper/ShadowedWrapper";

const CallIcon = () => {
    <div
        style={{ backgroundImage: `url(${OutGoing})` }}
        className="call-icon" />
}

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <Logo />
                <div className = "call-icon-wrapper">
                    <div
                        style={{ backgroundImage: `url(${OutGoing})` }}
                        className="call-icon" />
                </div>
            </div>
        </header>
    );
}

export default Header;