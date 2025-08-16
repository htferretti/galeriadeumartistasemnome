import { useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeenSliderInstance, useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { MotionSlider } from './styles';

type Props = {
    sliderInstanceRef: React.MutableRefObject<KeenSliderInstance | null>
    setCurrentSlide: (n: number) => void
    setIsFading: (value: boolean) => void
    setIsGaleria: (value: boolean) => void
}

const History: FC<Props> = ({ sliderInstanceRef, setCurrentSlide, setIsFading, setIsGaleria }) => {
    const navigate = useNavigate();
    
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            spacing: 48
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
            if(slider.track.details.rel === 2) {
                setIsFading(true)
                setIsGaleria(true)
                setTimeout(() => {
                    navigate('./galeria');
                }, 1000)
            }
        }
    })


    useEffect(() => {
        sliderInstanceRef.current = instanceRef.current;
    }, [instanceRef, sliderInstanceRef])

    return (
        <MotionSlider
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
            }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0 }}
            ref={sliderRef}
            className="keen-slider"
        >
            <div className="keen-slider__slide">
                <p>
                    Em junho de 2025, dois corpos foram encontrados em um apartamento na Aclimação, São Pualo: um pai e seu filho. O pai, já idoso, cuidava e medicava o filho, que era autista e expressava sua forma de interpretar o mundo por meio da pintura.
                </p>
                <p>
                    Porém, em um dia qualquer, o senhor veio a falecer. O artista "sem nome", ao presenciar a cena, teve uma crise e não conseguiu se recompor, esquecendo-se de se automedicar. Segundo a perícia, ele sofreu durante toda a madrugada antes de vir a falecer junto com o pai.
                </p>
            </div>
            <div className="keen-slider__slide">
                <p>
                    Dias depois, com o apartamento já esvaziado, a única coisa que restou foram algumas caixas contendo seus quadros, nenhum com assinatura ou data. Somavam pouco mais de 100, mas infelizmente só consegui digitalizar 17 deles, os quais estão expostos aqui.
                </p>
                <p>
                    Este projeto é uma homenagem a um artista que morreu desconhecido.
                </p>
            </div>
            <div className="keen-slider__slide" />
        </MotionSlider>
    )
}

export default History