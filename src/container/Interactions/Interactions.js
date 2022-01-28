import Header from "../../components/Header/Header";
import Background from '../../assets/images/background/interactionsBg.png';
import InteractionsNav from "../InteractionsNav/InteractionsNav";
import Slider from "../../components/Slider/Slider";

const Interactions = () => {
    return ( 
        <div
        style = {{backgroundImage: `url(${Background})`}}
        className = "int">
            <Header />
            <div className = " int-container container">
              <Slider/>
              {/* <InteractionsNav/> */}
            </div>
        </div>
     );
}
 
export default Interactions;