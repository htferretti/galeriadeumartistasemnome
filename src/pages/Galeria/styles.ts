import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import { Phone } from 'react-bootstrap-icons';

import { colors } from '../../styles';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .scene {
        width: 700px;
        perspective: 1000px;
        position: relative;
    }
    .scene .carousel.keen-slider {
        width: 100%;
        height: 100%;
        overflow: visible;
        position: absolute;
        transform: translateZ(-288px);
        transform-style: preserve-3d;
        display: flex;
        align-items: center;
    }
    .carousel__cell {
        width: 700px;
        position: absolute;

        img {
            width: 100%;
            display: block;
        }
    }
`
export const MotionContainer = motion(Container)

const rotate90 = keyframes`
    0% { transform: rotate(0deg); }
    25% { transform: rotate(90deg); }
    50% { transform: rotate(90deg); }
    75% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
`

export const Rotate = styled(Phone)`
    color: ${colors.main};
    font-size: 70px;
    animation: ${rotate90} 3s infinite ease-in-out; /* aplica animação */
`
