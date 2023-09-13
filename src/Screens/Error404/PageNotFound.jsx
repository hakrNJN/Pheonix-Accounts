import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const TerminalWrapper = styled(Box)({
    width: 650,
    height: 400,
    backgroundColor: '#000',
    borderRadius: 5,
    boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
    overflow: 'hidden',
});

const TerminalHeader = styled(Box)({
    height: 36,
    backgroundColor: '#C7C7CC',
    borderBottom: '1px solid #a1a1a6',
    display: 'flex',
    alignItems: 'center',
});

const TerminalButton = styled(Box)(({ color }) => ({
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: color,
    margin: '0px 8px',
}));

const TerminalContent = styled(Box)({
    height: 'calc(100% - 36px)',
});

const TerminalText = styled(Typography)({
    fontFamily: 'monospace',
    fontSize: '16px',
    color: '#fff',
});

const TypingIndicator = styled(Box)({
    width: '1px',
    height: '10px',
    backgroundColor: '#fff',
    marginLeft: '5px'
})

export const PageNotFound = () => {

    const date = new Date();
    const options = { weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    const formattedDate = date.toLocaleString('en-US', options).replace(',', '');


    const [textIndex, setTextIndex] = React.useState(0);
    const [charIndex, setCharIndex] = React.useState(0);
    const terminalText = React.useMemo(() => [
        `Last login: ${formattedDate} on ttys000`,
        'user@MacBook-Pro ~ %',
        'Error Detected : 404 - Page not found.',
        `Error Message : Page you are trying to access, either has been moved or does't exist`,
        `If it's an internal problem, we are working on it.`,
        `Please go back to home and start again`
    ], [formattedDate]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (textIndex < terminalText.length) {
                if (charIndex < terminalText[textIndex].length) {
                    setCharIndex((prevIndex) => prevIndex + 1);
                } else {
                    setTextIndex((prevIndex) => prevIndex + 1);
                    setCharIndex(0);
                }
            }
        }, 50);
        return () => clearInterval(interval);
    }, [textIndex, charIndex, terminalText]);

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    paddingTop: '10vh',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <TerminalWrapper>
                    <TerminalHeader>
                        <TerminalButton color="#FF5F56" />
                        <TerminalButton color="#FFBD2E" />
                        <TerminalButton color="#27C93F" />
                    </TerminalHeader>
                    <TerminalContent>
                        <Box p={2}>
                            {terminalText.slice(0, textIndex).map((text, index) => (
                                <React.Fragment key={index}>
                                    <TerminalText variant="body2">{text}</TerminalText>
                                </React.Fragment>
                            ))}
                            {textIndex < terminalText.length && (
                                <React.Fragment>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <TerminalText variant="body2">
                                            {terminalText[textIndex].slice(0, charIndex)}
                                        </TerminalText>
                                        {charIndex === terminalText[textIndex].length && textIndex !== terminalText.length - 1 ? (
                                            null
                                        ) : (
                                            <React.Fragment>
                                                <TypingIndicator />
                                            </React.Fragment>
                                        )}
                                    </Box>
                                    <br />
                                </React.Fragment>
                            )}
                        </Box>
                    </TerminalContent>
                </TerminalWrapper>
            </Box>
        </Container>
    );
};