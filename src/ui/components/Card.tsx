import React from 'react';
import Surface from './Surface';
import Column from './Column';

interface CardProps {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ style, children }) => {
    return (
        <Surface style={{
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 6px 8px rgba(0, 0, 0, .2)',
            ...style,
        }}>
            <Column>
                {children}
            </Column>
        </Surface>
    );
};

export default Card;
