import React from 'react';
import Surface from './Surface';
import Column from './Column';

interface CardProps {
    elevation?: number;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ elevation, className, style, children }) => {
    return (
        <Surface
            elevation={elevation}
            className={className}
            style={{
                borderRadius: 16,
                overflow: 'hidden',
                ...style,
            }}
        >
            <Column>
                {children}
            </Column>
        </Surface>
    );
};

export default Card;
