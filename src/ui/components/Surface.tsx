import React, { useContext } from 'react';
import ThemeContext from '../theme/Theme';

interface SurfaceProps {
    elevation?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const Surface: React.FC<SurfaceProps> = ({ elevation, style, children }) => {
    const theme = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor: theme.colorScheme.surfaceVariant,
                color: theme.colorScheme.onSurfaceVariant,
                boxShadow: theme.getBoxShadowFromElevation(elevation ?? 5) + '',
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default Surface;
