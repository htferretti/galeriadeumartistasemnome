import styled from 'styled-components';
import { motion } from 'framer-motion';

import { colors } from '../../../../styles';

const Container = styled.div`
    position: absolute;
    bottom: 0;
    max-width: 500px;
    width: 100%;
    margin: 0 8px;
    padding: 32px;
    text-align: center;
    color: ${colors.main};

    p {
        font-size: 24px;
        font-weight: 500;

        @media (max-width: 400px) {
            font-size: 20px;
        }
    }
`
export const MotionContainer = motion(Container)

export const Btn = styled.button`
    display: inline-block;
    text-align: center; 
    background: ${colors.background};
    padding: 8px 0;
    font-size: 20px;
    font-weight: 300;
    color: ${colors.main};
    border-style: solid;
    border-color: ${colors.main};
    cursor: pointer;

    @media (max-width: 400px) {
        font-size: 16px;
    }

    &.left {
        width: 50%;
        border-width: 2px 1px 2px 2px;
        border-radius: 25px 0 0 25px;

        &:hover {
            background: ${colors.main};
            color: ${colors.background};
            transform: translateY(8px);
        }
    }
    &.right {
        width: 50%;
        border-width: 2px 2px 2px 1px;
        border-radius: 0 25px 25px 0;

        &:hover {
            background: ${colors.main};
            color: ${colors.background};
            transform: translateY(8px);
        }
    }
`

export const BtnHistoria = styled(Btn)`
    width: 100%;
    border: none;
    padding: 0;
    background: ${colors.red};
    border-radius: 25px;

    button {
        width: 33%;
        padding: 8px 0;
        color: ${colors.main};
        border-style: solid;
        border-color: ${colors.main};
        cursor: pointer;
        background: ${colors.background};

        &.btn1 {
            border-width: 2px 1px 2px 2px;
            border-radius: 25px 0 0 25px;
        }
        &.btn2 {
            border-width: 2px 1px 2px 1px;
            width: 34%;
        }
        &.btn3 {
            border-width: 2px 2px 2px 1px;
            border-radius: 0 25px 25px 0
        }

        &:hover, &.active {
            background: ${colors.main};
            color: ${colors.background};
            transform: translateY(8px);
        }

        &:focus {
            outline: none;
        }
    }
`

export const BtnDiv = styled.button`
    width: 100%;
    border-radius: 25px;
    margin-top: 16px;
    background: ${colors.red};
`