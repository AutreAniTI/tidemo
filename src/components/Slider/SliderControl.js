import Button from "../Button/Button";
import NextIcon from '../../assets/icons/Icons/NextIcon';
import PrevIcon from '../../assets/icons/Icons/PrevIcon';
// import Question from "../QAContainer/Question/Question";
// import Exclamation from "../QAContainer/Question/Exclamation/Exclamation";
import ExclamationIcon from '../../assets/icons/Icons/ExclamationMIcon';
import QuestionIcon from '../../assets/icons/Icons/QuestionMIcon';
import QAContainer from "../QAContainer/QAContainer";

const DIV = () => <div>Text</div>

const SliderControl = ({
    state,
    handlePrevClick,
    handleNextClick
}) => {
    return (
        <div className="button-wrapper">
            <Button
                className="go-back-btn"
                children={<PrevIcon />}
                label="Go back"
                handleClick={handlePrevClick} />
            <div className="question-exclamation-wrapper">
                <QAContainer
                    className="qa-container-left"
                    Icon={ExclamationIcon}
                    BoxContent={DIV} />
                <QAContainer
                    className="qa-container-right"
                    Icon={QuestionIcon}
                    BoxContent={DIV} />
                {/* <Exclamation />
                <Question /> */}
            </div>
            <Button
                className="continue-btn"
                children={<NextIcon />}
                label="Continue"
                handleClick={handleNextClick} />
        </div>
    );
}

export default SliderControl;