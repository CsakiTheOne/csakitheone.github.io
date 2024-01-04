import React, { useContext } from 'react';
import ThemeContext from '../theme/Theme';
import Surface from './Surface';

interface Props {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const Page: React.FC<Props> = ({ style, children }) => {
    const theme = useContext(ThemeContext);

    return (
        <Surface
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: theme.colorScheme.background,
                color: theme.colorScheme.onBackground,
                ...style,
            }}
        >
            <div
                style={{
                    maxWidth: 800,
                    paddingBottom: 80,
                }}
            >
                {children}
            </div>
        </Surface>
    );
};

export default Page;
