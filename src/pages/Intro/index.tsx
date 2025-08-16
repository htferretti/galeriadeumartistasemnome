import React, { useRef, useState } from 'react';
import { KeenSliderInstance } from 'keen-slider/react';

import Loading from './components/Loading';
import Header from './components/Header';
import History from './components/History';
import Button from './components/Button';

import title from './assets/title.png'

import { Container, MotionImageTitle } from './styles'

const Intro = () => {
    const [isHistoria, setIsHistoria] = useState(false);
    const [isGaleria, setIsGaleria] = useState(false);
    const [isFading, setIsFading] = useState(false);

    const sliderInstanceRef = useRef<KeenSliderInstance | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <Container>
            <Loading />
            <Header isGaleria={isGaleria} />
            { isHistoria &&
                <History
                    sliderInstanceRef={sliderInstanceRef}
                    setCurrentSlide={setCurrentSlide}
                    setIsGaleria={setIsGaleria}
                    setIsFading={setIsFading}
                />
            }
            { !isHistoria &&
                <MotionImageTitle
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: isFading ? 0 : 1,
                    }}
                    transition={{ duration: isFading ? 1 : 2, ease: "easeOut", delay: isFading ? 0 : 5 }}
                    src={title}
                    alt='GALERIA DE UM ARTISTA SEM NOME'
                />
            }
            <Button
                setIsHistoria={setIsHistoria}
                isHistoria={isHistoria}
                setIsGaleria={setIsGaleria}
                isGaleria={isGaleria}
                setIsFading={setIsFading}
                isFading={isFading}
                sliderInstanceRef={sliderInstanceRef}
                currentSlide={currentSlide}
            />
        </Container>
    )
}

export default Intro