import { FC, useEffect, useRef, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import useTheme from "../utils/themeContext"
import { ReactComponent as Star} from "../assets/decoration/star.svg"
import { ReactComponent as Key} from "../assets/decoration/key.svg"
import { useDrag } from "react-use-gesture"
import { animated, useSpring } from "@react-spring/web"
import Locked from "../assets/icons/locked.png"
import Unlocked from "../assets/icons/unlocked.png"
import IosIcon from "../components/IosIcon"


const Welcome: FC = () => {
    const { state } = useTheme()
    const [mousePos, setMousePos] = useState({x:0,y:0})
    const [dragging, setDragging] = useState(false)
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const [keyDragging, setKeyDragging] = useState<null | Boolean>(null)
    const [enterButton, setEnterButton] = useState({
        buttonState: "locked",
        pos: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }
    });

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
            if (active === false) {
                handleKeyDrop();
            }
            setKeyDragging(active)
            setDragging(active)
            keyApi.start({
                keyX: offset[0],
                keyY: offset[1]
            })
        },
    )

    const handleKeyDrop = () => {
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

        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        handleResize() // getEnterButtonPos on first render

        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <section className={`welcome theme--${state.theme}`}>
            <animated.div style={{x:starX, y:starY}} {...bindDragStar()} className={`welcome__drag-icon welcome__drag-icon--star ${dragging && "dragging"}`}>
                <Star />
            </animated.div>
            <animated.div style={{x:keyX, y:keyY}} {...bindDragKey()} className={`welcome__drag-icon welcome__drag-icon--key ${dragging && "dragging"}`}>
                <Key />
            </animated.div>
            <p className={`welcome__content theme--${state.theme}`}>
                <span className={`welcome__content__sub theme--${state.theme}`}>Lise Denis</span>
                Bonjour !<br></br>
                Je suis Lise, une graphiste
                et directrice artistique, bienvenue sur mon portfolio.
            </p>
            <button ref={buttonRef} className={`welcome__button theme--${state.theme}`} onClick={handleClick}>
                Entrer 
                {enterButton.buttonState === "locked" ?
                    <IosIcon src={Locked}/>
                    : 
                    <IosIcon src={Unlocked}/>
                }
            </button>
            <span className={`welcome__help theme--${state.theme}`}>Attrapez la clé ! <Link className="welcome__help__link" to="/portfolio"> ...ou forcer le passage</Link> 🚪</span>
        </section>
    )
}

export default Welcome