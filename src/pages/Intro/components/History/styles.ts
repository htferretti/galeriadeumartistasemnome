import styled from 'styled-components';
import { motion } from 'framer-motion';

import { colors } from '../../../../styles';

const Slider = styled.div`
    max-width: 500px;
    width: 100%;
    text-align: justify;
    font-size: 24px;
    color: ${colors.main};

    @media (max-width: 500px) {
        font-size: 20px;
        max-width: 350px;
    }

    p {
        margin: 32px 0;
        text-indent: 32px;
    }
`
export const MotionSlider = motion(Slider)