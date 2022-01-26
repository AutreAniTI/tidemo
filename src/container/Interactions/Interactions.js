import Header from "../../components/Header/Header";
import Background from '../../assets/images/background/interactionsBg.png';

const Interactions = () => {
    return ( 
        <div
        style = {{backgroundImage: `url(${Background})`}}
        className = "int">
            <Header />
            <div className = " int-container container">
                <h1>Slider</h1>
            </div>
        </div>
     );
}
 
export default Interactions;