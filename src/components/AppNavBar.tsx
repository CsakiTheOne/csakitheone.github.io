import { mdiHome } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import wholesomeWareIcon from '../res/icons/path';
import BottomAppBar from '../ui/components/BottomAppBar';
import NavigationBarItem from '../ui/components/NavigationBarItem';
import { useNavigate } from 'react-router-dom';

interface AppNavBarProps {
    selectedItem: 'home' | 'wholesomeware';
}

const AppNavBar: React.FC<AppNavBarProps> = ({ selectedItem }) => {
    const navigate = useNavigate();

    return (
        <BottomAppBar>
            <NavigationBarItem
                icon={<Icon
                    path={mdiHome}
                    size={1}
                />}
                label='Home'
                isSelected={selectedItem === 'home'}
                onClick={() => {
                    navigate('/');
                }}
            />
            <NavigationBarItem
                icon={<Icon
                    path={wholesomeWareIcon}
                    size={1}
                />}
                label='WholesomeWare'
                isSelected={selectedItem === 'wholesomeware'}
                onClick={() => {
                    navigate('/wholesomeware');
                }}
            />
        </BottomAppBar>
    );
};

export default AppNavBar;
