import React, { useContext } from 'react';
import ThemeContext from '../theme/Theme';

interface NavigationBarItemProps {
    icon: React.ReactNode;
    label?: string;
    isSelected?: boolean;
    onClick?: () => void;
}

const NavigationBarItem: React.FC<NavigationBarItemProps> = ({ icon, label, isSelected, onClick }) => {
    const theme = useContext(ThemeContext);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 8,
                color: isSelected ? theme.colorScheme.primary : theme.colorScheme.onSurfaceVariant,
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <span>{icon}</span>
            <span style={{ fontWeight: isSelected ? 'bold' : 'normal' }}>
                {label}
            </span>
        </div>
    );
};

export default NavigationBarItem;
