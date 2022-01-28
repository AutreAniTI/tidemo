const SlideElement = ({ n, active, width, elem }) => {
    return (
        <div
            style={{ width }}
            className={`slider-elem ${active? "slider-elem-active": undefined}`}>
            {elem}
        </div>
    );
}

export default SlideElement;