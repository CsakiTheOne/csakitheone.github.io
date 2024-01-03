import React, { useContext } from 'react';
import ThemeContext from '../theme/Theme';
import Row from './Row';
import './Button.css';

interface ButtonProps {
    style?: React.CSSProperties;
    onClick: () => void;
    icon?: React.ReactNode;
    label: string;
}

const Button: React.FC<ButtonProps> = ({ style, onClick, icon, label }) => {
    const theme = useContext(ThemeContext);

    return (
        <button
            className='Button'
            style={{
                backgroundColor: theme.colorScheme.primary,
                color: theme.colorScheme.onPrimary,
                ...style,
            }}
            onClick={onClick}
        >
            <Row
                style={{
                    alignItems: 'center',
                    justifyContent: icon ? 'flex-start' : 'center',
                }}
            >
                {icon}
                {icon && <span style={{ width: 8 }}></span>}
                <span style={{ fontWeight: 'bold' }}>
                    {label}
                </span>
            </Row>
        </button>
    );
};

export default Button;
