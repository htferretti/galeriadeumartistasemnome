import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeenSliderInstance } from 'keen-slider/react';

import { MotionContainer, BtnDiv, Btn, BtnHistoria } from './styles';

type Props = {
    setIsHistoria: (value: boolean) => void
    isHistoria: boolean
    setIsGaleria: (value: boolean) => void
    isGaleria: boolean
    setIsFading: (value: boolean) => void
    isFading: boolean
    sliderInstanceRef: React.MutableRefObject<KeenSliderInstance | null>
    currentSlide: number
}

const Button: FC<Props> = ({ setIsHistoria, isHistoria, setIsGaleria, isGaleria, setIsFading, isFading, sliderInstanceRef, currentSlide }) => {
    const navigate = useNavigate();

    const historiaClick = () => {
        setIsFading(true)
        setTimeout(() => {
            setIsHistoria(true)
        }, 1000)
    }

    const galeriaClick = () => {
        setIsFading(true)
        setIsGaleria(true)
        setTimeout(() => {
            navigate('./galeria');
        }, 1000)
    }

    return (
        <MotionContainer
            initial={{ y: 150, scale: 1.5, opacity: 0 }}
            animate={{
                // eslint-disable-next-line no-mixed-operators
                y: isFading && !isHistoria || isFading && isGaleria ? 150 : 0,
                scale: 1,
                opacity: isFading && !isHistoria ? 0 : 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: isFading ? 0 : 7 }}
        >
            { !isHistoria &&
                <p>VER</p>
            }
            { !isHistoria &&
                <BtnDiv>
                    <Btn
                        onClick={historiaClick}
                        className='left'
                    >História</Btn>
                    <Btn 
                        onClick={galeriaClick}
                        className='right'
                    >Galeria</Btn>
                </BtnDiv>
            }
            { isHistoria &&
                <BtnHistoria>
                    <button
                        className={currentSlide === 0 ? "btn1 active" : "btn1"}
                        onClick={() => sliderInstanceRef.current?.moveToIdx(0)}
                    >
                        1
                    </button>
                    <button
                        className={currentSlide === 1 ? "btn2 active" : "btn2"}
                        onClick={() => sliderInstanceRef.current?.moveToIdx(1)}
                    >
                        2
                    </button>
                    <button
                        className={currentSlide === 2 ? "btn3 active" : "btn3"}
                        onClick={() => sliderInstanceRef.current?.moveToIdx(2)}
                    >
                        ▭
                    </button>
                </BtnHistoria>
            }
        </MotionContainer>
    )
}

export default Button