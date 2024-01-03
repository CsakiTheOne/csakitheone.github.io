import React, { useContext } from 'react';
import ThemeContext from '../theme/Theme';

interface Props {
    children: React.ReactNode;
}

const Page: React.FC<Props> = ({ children }) => {
    const theme = useContext(ThemeContext);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: theme.colorScheme.background,
                color: theme.colorScheme.onBackground,
            }}
        >
            {children}
        </div>
    );
};

export default Page;
