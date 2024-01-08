import React from 'react';
import Surface from './Surface';
import Row from './Row';

interface Props {
    elevation?: number;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const BottomAppBar: React.FC<Props> = ({ elevation, className, style, children }) => {
    return (
        <Surface
            elevation={elevation}
            className={className}
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                minHeight: 48,
                ...style,
            }}
        >
            <Row
                style={{
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                {children}
            </Row>
        </Surface>
    );
};

export default BottomAppBar;
