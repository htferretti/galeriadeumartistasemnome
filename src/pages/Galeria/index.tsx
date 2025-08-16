import { useState, useEffect } from "react"
import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { MotionContainer, Rotate } from "./styles"

const carousel: KeenSliderPlugin = (slider) => {
    let translateZ = 0

    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${translateZ}px) rotateY(${-deg}deg)`
        slider.slides.forEach((el, idx) => {
            const anglePerSlide = 360 / slider.slides.length
            const slideAngle = (anglePerSlide * idx - deg + 360) % 360

            const img = el.querySelector("img") as HTMLElement
            if (slideAngle > 60 && slideAngle < 300) {
                img.style.filter = "brightness(0.4)"
                el.setAttribute("data-back", "true")
            } else {
                img.style.filter = "brightness(1)"
                el.setAttribute("data-back", "false")
            }
        })
    }

    slider.on("created", () => {
        const N = slider.slides.length
        const cellWidth = slider.slides[0].getBoundingClientRect().width
        translateZ = Math.round(cellWidth / (2 * Math.tan(Math.PI / N)) * 2)

        const deg = 360 / N
        slider.slides.forEach((el, idx) => {
            el.style.transform = `rotateY(${deg * idx}deg) translateZ(${translateZ}px)`
        })

        rotate()
    })

    slider.on("detailsChanged", rotate)
}

const Galeria = () => {
    const [isMobilePortrait, setIsMobilePortrait] = useState(false)

    useEffect(() => {
        const checkScreen = () => {
            const width = window.innerWidth
            const height = window.innerHeight
            setIsMobilePortrait(width < 700 && width < height)
        }

        checkScreen()
        window.addEventListener("resize", checkScreen)
        return () => window.removeEventListener("resize", checkScreen)
    }, [])

    const imageCount = 17
    const images = Array.from({ length: imageCount }, (_, i) =>
        require(`./galeria/${i + 1}.png`)
    )
    const shuffled = [...images].sort(() => Math.random() - 0.5)

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
        loop: true,
        selector: ".carousel__cell",
        renderMode: "custom",
        mode: "snap",
        },
        [carousel]
    )

    return (
        <MotionContainer
            className="wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1  }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
        >
            {isMobilePortrait ? (
            <Rotate />
            ) : (
            <div className="scene">
                <div ref={sliderRef} className="carousel keen-slider">
                {shuffled.map((src, index) => (
                    <div key={index} className="carousel__cell">
                    <img src={src} alt={`Imagem ${index + 1}`} />
                    </div>
                ))}
                </div>
            </div>
            )}
        </MotionContainer>
    )
}

export default Galeria
