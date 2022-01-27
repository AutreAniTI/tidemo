import Header from "../../components/Header/Header";
import Background from '../../assets/images/background/interactionsBg.png';
import InteractionsNav from "../InteractionsNav/InteractionsNav";

const Interactions = () => {
    return ( 
        <div
        style = {{backgroundImage: `url(${Background})`}}
        className = "int">
            <Header />
            <div className = " int-container container">
              <InteractionsNav/>
            </div>
        </div>
     );
}
 
export default Interactions;