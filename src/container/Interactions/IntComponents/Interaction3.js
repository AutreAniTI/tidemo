import { useEffect, useState } from "react/cjs/react.development";
import { ids } from "webpack";
import ToggleButton from "../../../components/Button/ToggleButton";
import MessageBox from "../../../components/MessageBox/MessageBox";
import { MESSAGES } from "../Data/messages";

const Interaction3 = ({ index, setDisabled, setIncomplete , active}) => {
    const message = MESSAGES[index];
    const [state, setState] = useState({});
    useEffect(() => {
        if(active) {
            if(!state.proposal) {
                setDisabled(true)
            }else{
                setDisabled(false)
            }
            if(!state.contract) {
                setIncomplete(true)
            }else{
                setIncomplete(false)
            }
        }
    },[state, active])

    return (
        <div className="int-item">
            <MessageBox
                title={true}
                text={message.title} />
            <MessageBox
                text={message.text} />
            <div className="toggler-wrapper">
                <div
                className = "toggle-wrapper-item">
                    <span className = "label">Proposal: </span>
                    <ToggleButton
                        handleChange={() => setState({...state, proposal: true })} />
                </div>
                <div
                className = "toggle-wrapper-item">
                    <span className = "label">Contract: </span>
                    <ToggleButton
                        handleChange={() => setState({...state, contract: true })} />
                </div>
            </div>
        </div>
    );
}

export default Interaction3;