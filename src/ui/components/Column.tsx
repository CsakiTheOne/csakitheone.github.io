import React from 'react';

interface Props {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const Column: React.FC<Props> = ({ style, children }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default Column;
