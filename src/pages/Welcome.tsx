import React, { FC, useEffect, useRef, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import useTheme from "../utils/themeContext"
import { ReactComponent as Star} from "../assets/decoration/star.svg"
import { ReactComponent as Key} from "../assets/decoration/key.svg"
import { useDrag } from "react-use-gesture"
import { animated, useSpring } from "@react-spring/web"
import Locked from "../assets/icons/locked.png"
import Unlocked from "../assets/icons/unlocked.png"
import IosIcon from "../components/IosIcon"
import useDeviceType from "../utils/useDeviceType"
import useWindowHeightSize from "../utils/useWindowHeightSize"


const Welcome: FC = () => {
    const { state } = useTheme()
    const [dragging, setDragging] = useState(false)
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const [enterButton, setEnterButton] = useState({
        buttonState: "locked",
        pos: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }
    });
    const deviceType = useDeviceType()
    const windowHeightSize = useWindowHeightSize()

    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/portfolio")
    }


    const [{starX, starY}, starApi] = useSpring(() => ({starX: 0, starY: 0}))
    const bindDragStar = useDrag(({offset, active}) => 
        {
            setDragging(active)
            starApi.start({
                starX: offset[0],
                starY: offset[1],
            })
        },
    )

    const [{keyX, keyY}, keyApi] = useSpring(() => ({keyX: 0, keyY: 0}))
    const bindDragKey = useDrag(({offset, active}) => 
        {
            setDragging(active)
            keyApi.start({
                keyX: offset[0],
                keyY: offset[1]
            })
        },
    )


    // Manage HandleKeyDrop and compare it with mouse / touch pos
    const getMousePos = (event: React.MouseEvent<HTMLDivElement>) => {
        const mousePos = { x: event.clientX, y: event.clientY }
        handleKeyDrop(mousePos)
    }

    const getTouchPos = (event: React.TouchEvent<HTMLDivElement>) => {
        const mousePos = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }
        handleKeyDrop(mousePos)
    }

    const handleKeyDrop = (mousePos : {x:number, y:number}) => {
        if ((mousePos.x > enterButton.pos.left && mousePos.x < enterButton.pos.right) && (mousePos.y > enterButton.pos.top && mousePos.y < enterButton.pos.bottom)) {
            setEnterButton({
                ...enterButton,
                buttonState: "unlocked"
            })
        }
    }
    

    const getDOMelementPos = (DOMelement: HTMLElement) => {
        const DOMelementPos = DOMelement.getBoundingClientRect()
        return DOMelementPos
    }

    useEffect(() => {
        const handleResize = () => {
            const {top, bottom, left, right} = getDOMelementPos(buttonRef.current!)
            setEnterButton({
                ...enterButton,
                pos: {
                    top: top,
                    bottom: bottom,
                    left: left,
                    right: right
                }
            })
        };

        window.addEventListener('resize', handleResize);
        handleResize() // getEnterButtonPos on first render

        return () => {
          window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <section className={`welcome theme--${state.theme}`} style={deviceType === "ios" || "android" ? { height: windowHeightSize } : {height: "100vh"}}>
            <animated.div style={{x:starX, y:starY}} {...bindDragStar()} className={`welcome__drag-icon welcome__drag-icon--star ${dragging && "dragging"}`}>
                <Star />
            </animated.div>
            <animated.div 
                style={{x:keyX, y:keyY}} 
                {...bindDragKey()} 
                className={`welcome__drag-icon welcome__drag-icon--key ${dragging && "dragging"}`} 
                onClick={deviceType === "desktop" ? getMousePos : () => {}} 
                onTouchEnd={deviceType === "ios" || "android" ? getTouchPos : () => {}}
            >
                <Key />
            </animated.div>
            <p className={`welcome__content theme--${state.theme}`}>
                <span className={`welcome__content__sub theme--${state.theme}`}>Lise Denis</span>
                Bonjour !<br></br>
                Je suis Lise, une graphiste
                et directrice artistique, bienvenue sur mon portfolio.
            </p>
            <button ref={buttonRef} className={`welcome__button theme--${state.theme}`} onClick={handleClick} disabled={enterButton.buttonState === "locked" ? true : false}>
                Entrer 
                {enterButton.buttonState === "locked" ?
                    <IosIcon src={Locked}/>
                    : 
                    <IosIcon src={Unlocked}/>
                }
            </button>
            <span className={`welcome__help theme--${state.theme}`}>Attrapez la clé ! <Link className="welcome__help__link" to="/portfolio"> ...ou forcer le <span className="now-wrap">passage 🚪</span></Link></span>
        </section>
    )
}

export default Welcome