import styled from 'styled-components';
import { motion } from 'framer-motion';

import { colors } from '../../../../styles';

const Container = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background: ${colors.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.main};
    opacity: 0;

    p {
        font-size: 24px;
        font-weight: 200;

        @media (max-width: 400px) {
            font-size: 20px;
        }
    }

    h1 {
        font-size: 36px;
    }
`
export const MotionContainer = motion(Container)