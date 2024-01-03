import React, { useContext } from 'react';
import ThemeContext from '../theme/Theme';
import Row from './Row';

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
            style={{
                backgroundColor: theme.colorScheme.primary,
                color: theme.colorScheme.onPrimary,
                borderRadius: 16,
                padding: 8,
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                ...style,
            }}
            onClick={onClick}
        >
            <Row>
                {icon}
                <span style={{ fontWeight: 'bold' }}>
                    {label}
                </span>
            </Row>
        </button>
    );
};

export default Button;
