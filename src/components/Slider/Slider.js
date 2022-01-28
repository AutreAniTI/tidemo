import { useEffect, useRef, useState } from "react";
import SlideElement from "./SlideElement";
import SliderControl from "./SliderControl";



const arr = ["first", "second", "third", "fourth", "fifth"];


const Slider = () => {
    const [width, setWidth] = useState()
    const outerSlider = useRef();
    const [state, setState] = useState({
        active: 1,
        left: 0,
    })


    useEffect(() => {
        if (outerSlider.current)
            setWidth(outerSlider.current.offsetWidth)
    }, [outerSlider.current])

    const innerSlider = arr.map((elem, index) => (
        <SlideElement
            active={(state.active - 1) === index}
            n={index + 1}
            key={index}
            elem={elem}
            width={width}
        />
    ))

    const handlePrevClick = () => {
        if (state.active !== 1) {
            setState({
                left: state.left + width,
                active: state.active - 1
            })
        }
    }

    const handleNextClick = () => {
        if (state.active !== arr.length) {
            setState({
                left: state.left - width,
                active: state.active + 1,
            })
        }
    }


    return (
        <div
            ref={outerSlider}
            className="slider-wrapper">
            <div
                style={{ transform: `translateX(${state.left}px)` }}
                className="slider">
                {
                    innerSlider
                }
            </div>
                <SliderControl
                    handleNextClick = {handleNextClick}
                    handlePrevClick = {handlePrevClick}
                    state = {state}/>
        </div>
    );
}

export default Slider;
