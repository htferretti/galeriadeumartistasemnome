import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Instagram } from 'react-bootstrap-icons'

import { colors } from '../../../../styles';

const Container = styled.div`
    position: absolute;
    top: 0;
    padding: 32px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 24px;

    a {
        color: ${colors.main};
    }
`
export const MotionContainer = motion(Container)

export const Icon = styled(Instagram)`
    cursor: pointer;

    &:hover {
        color: ${colors.red};
    }
`