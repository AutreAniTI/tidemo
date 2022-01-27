import { NAV_ITEMS_MAIN, NAV_ITEMS_SMALL } from "./navItems";
import NavCircle from "../../components/NavCircle/NavCircle";
import DashedPolygon from "../../components/DashedComponents/DashedPolygon";
import DashedLine from "../../components/DashedComponents/DashedLine";
import { useState } from "react/cjs/react.development";

const InteractionsNav = () => {
    const [activeNav, setActiveNav] = useState();
    const [animationName, setAnimationName] = useState();

    const handleAnimationEnd = (e) => {
        const activeNav = e.animationName.split("zoom-");
        console.log(activeNav);
    }


    const nav_main = NAV_ITEMS_MAIN.map((elem, index) => (
        <NavCircle
            updateAnimation = {(str) => setAnimationName(str)}
            icon={elem.icon}
            key={index}
            text={elem.name}
        />
    ))
    const nav_small = NAV_ITEMS_SMALL.map((elem, index) => (
        <NavCircle
            updateAnimation = {(str) => setAnimationName(str)}
            className = "nav-circle-small"
            key={index}
            text={elem.name}
        />
    ))
 
    return (
        <div
            className="interactions-nav-wrapper">
            <div
                style = {{animationName}}
                onAnimationEnd = {() => handleAnimationEnd}
                className="interactions-nav"
            >
                {nav_main}
                {nav_small}
               <DashedPolygon />
               <DashedLine 
                className = "dashed-line-first"/>
               <DashedLine
               className = "dashed-line-second" />
               <DashedLine
               className = "dashed-line-third" />
            </div>
        </div>
    );
}

export default InteractionsNav;