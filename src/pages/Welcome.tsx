import { FC, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useTheme from "../utils/themeContext";
import { ReactComponent as Star} from "../assets/decoration/star.svg"
import { useDrag } from "react-use-gesture";
import { animated, useSpring } from "@react-spring/web";

const Welcome: FC = () => {
    const { state } = useTheme();
    const [dragging, setDragging] = useState(false);

    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/portfolio")
    }

    const [{x,y}, api] = useSpring(() => ({
        x: 0,
        y: 0,
    }))

    const bindDrag = useDrag(({offset, active}) => 
        {
            setDragging(active)
            api.start({
                x: offset[0],
                y: offset[1],
            })

        },
        // {bounds: { left: -100 / 2, right: 100 / 2, top: -100 / 2, bottom: 100 / 2 }}
    )

    return (
        <section className={`welcome theme--${state.theme}`}>
            <animated.div style={{x, y}} {...bindDrag()} className={`welcome__decorated-icon ${dragging && "dragging"}`}>
                <Star/>
            </animated.div>
            <p className={`welcome__content theme--${state.theme}`}>
                <span className={`welcome__content__sub theme--${state.theme}`}>Lise Denis</span>
                Bonjour !<br></br>
                Je suis Lise, une graphiste
                et directrice artistique, bienvenue sur mon portfolio.
            </p>
            <button className={`welcome__button theme--${state.theme}`} onClick={handleClick}>
                Entrer
            </button>
        </section>
    )
}

export default Welcome