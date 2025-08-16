import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ImageTitle = styled.img`
    width: 300px;
    opacity: 0;
`
export const MotionImageTitle = motion(ImageTitle)