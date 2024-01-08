import React, { useContext } from 'react';
import ThemeContext from '../theme/Theme';
import Surface from './Surface';
import './Page.css';

interface Props {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const Page: React.FC<Props> = ({ style, children }) => {
    const theme = useContext(ThemeContext);

    return (
        <Surface
            style={{
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'auto',
                backgroundColor: theme.colorScheme.background,
                color: theme.colorScheme.onBackground,
                ...style,
            }}
        >
            <div className="page-content">
                {children}
            </div>
        </Surface>
    );
};

export default Page;
