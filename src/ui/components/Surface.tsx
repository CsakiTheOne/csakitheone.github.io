import React, { useContext } from 'react';
import ThemeContext from '../theme/Theme';

interface SurfaceProps {
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const Surface: React.FC<SurfaceProps> = ({ style, children }) => {
    const theme = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor: theme.colorScheme.surfaceVariant,
                color: theme.colorScheme.onSurfaceVariant,
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default Surface;
