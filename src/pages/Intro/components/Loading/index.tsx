import { MotionContainer } from './styles'

const Loading = () => {
    return (
        <MotionContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
                times: [0, 0.2, 0.8, 1],
                duration: 3,
                delay: 1,
                ease: "linear",
            }}
        >
            <div>
                <p>DARK NECESSITIES: DROP #1</p>
            </div>
        </MotionContainer>
    )
}

export default Loading