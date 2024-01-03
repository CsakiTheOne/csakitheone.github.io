import React from 'react';
import Surface from './Surface';
import Row from './Row';

interface Props {
    children: React.ReactNode;
}

const BottomAppBar: React.FC<Props> = ({ children }) => {
    return (
        <Surface
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                minHeight: 48,
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
