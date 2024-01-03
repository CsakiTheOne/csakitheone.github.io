import React from 'react';

interface Props {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const Row: React.FC<Props> = ({ style, children }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default Row;
