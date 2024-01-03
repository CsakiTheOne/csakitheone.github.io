import React, { useContext } from 'react';
import ThemeContext from '../theme/Theme';
import './NavigationBarItem.css';

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
            className='NavigationBarItem'
            style={{
                color: isSelected ? theme.colorScheme.primary : theme.colorScheme.onSurfaceVariant,
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
