import { FC } from 'react';
import { MotionContainer, Icon } from './styles';

type Props = {
    isGaleria: boolean
}

const Header: FC<Props> = ({ isGaleria }) => {
    return (
        <MotionContainer
            initial={{ y: -150 }}
            animate={{
                y: isGaleria ? -150 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: isGaleria ? 0 : 7 }}
        >
            <a href='https://www.instagram.com/darkncts/' target="_blank" rel="noopener noreferrer">
                <Icon />
            </a>
        </MotionContainer>
    )
}

export default Header