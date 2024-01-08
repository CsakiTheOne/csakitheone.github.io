import React, { useContext } from 'react';
import ThemeContext from '../theme/Theme';

interface SurfaceProps {
    elevation?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const Surface: React.FC<SurfaceProps> = ({ elevation, className, style, children }) => {
    const theme = useContext(ThemeContext);

    return (
        <div
            className={className}
            style={{
                backgroundColor: theme.colorScheme.surfaceVariant,
                color: theme.colorScheme.onSurfaceVariant,
                overflow: 'hidden',
                boxShadow: theme.getBoxShadowFromElevation(elevation ?? 5) + '',
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default Surface;
