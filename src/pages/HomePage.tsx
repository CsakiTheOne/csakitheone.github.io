import React, { useContext } from 'react';
import Page from '../ui/components/Page';
import Column from '../ui/components/Column';
import ThemeContext from '../ui/theme/Theme';
import Button from '../ui/components/Button';

interface HomePageProps { }

const HomePage: React.FC<HomePageProps> = () => {
    const theme = useContext(ThemeContext);
    const age = Math.floor((new Date().getTime() - new Date(2001, 1, 20).getTime()) / (365.25 * 24 * 60 * 60 * 1000));

    return (
        <Page>
            <Column style={{ padding: 8 }}>
                <h1 style={{ padding: 8 }}>Hi! Most people call me Csáki</h1>
                <p style={{ padding: 8, opacity: .7 }}>
                    <a
                        style={{ color: theme.colorScheme.onBackground, textDecoration: 'none' }}
                        href="http://ipa-reader.xyz/"
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        /t͡ʃa:ki/
                    </a>
                </p>
                <p style={{ padding: 8 }}>
                    I'm a {age} year old software developer from Hungary.
                    I love making mobile apps, but I can also make websites,
                    desktop apps, games, development tools and more.
                </p>
                <Button
                    style={{ margin: 8 }}
                    onClick={() => {
                        window.open('https://github.com/CsakiTheOne', '_blank');
                    }}
                    label='GitHub'
                />
                <Button
                    style={{ margin: 8 }}
                    onClick={() => {
                        window.open('https://play.google.com/store/apps/dev?id=8177011913013516936', '_blank');
                    }}
                    label='Google Play'
                />
            </Column>
        </Page>
    );
};

export default HomePage;
