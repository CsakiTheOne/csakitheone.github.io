import React, { useContext } from 'react';
import Page from '../ui/components/Page';
import Column from '../ui/components/Column';
import ThemeContext from '../ui/theme/Theme';
import Button from '../ui/components/Button';
import Icon from '@mdi/react';
import { mdiGithub, mdiGooglePlay, mdiHome, mdiInstagram } from '@mdi/js';
import Card from '../ui/components/Card';
import Row from '../ui/components/Row';
import BottomAppBar from '../ui/components/BottomAppBar';
import NavigationBarItem from '../ui/components/NavigationBarItem';
import wholesomeWareIcon from '../res/icons/path';
import { useNavigate } from 'react-router-dom';
import AppNavBar from '../components/AppNavBar';

interface HomePageProps { }

const HomePage: React.FC<HomePageProps> = () => {
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();
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
                <Card style={{ margin: 8, padding: 8 }}>
                    <p style={{ padding: 8 }}>
                        I'm a {age} year old software developer from Hungary.
                        I love making mobile apps, but I can also make websites,
                        desktop apps, games, development tools and more.
                    </p>
                </Card>
                <Row>
                    <Card style={{ margin: 8, padding: 8, width: '50%' }}>
                        <h3 style={{ padding: 8 }}>Coding links</h3>
                        <Button
                            style={{ margin: 8 }}
                            onClick={() => {
                                window.open('https://github.com/CsakiTheOne', '_blank');
                            }}
                            icon={<Icon
                                path={mdiGithub}
                                size={1}
                            />}
                            label='GitHub'
                        />
                        <Button
                            style={{ margin: 8 }}
                            onClick={() => {
                                window.open('https://play.google.com/store/apps/dev?id=8177011913013516936', '_blank');
                            }}
                            icon={<Icon
                                path={mdiGooglePlay}
                                size={1}
                            />}
                            label='Google Play'
                        />
                    </Card>
                    <Card style={{ margin: 8, padding: 8, width: '50%' }}>
                        <h3 style={{ padding: 8 }}>Personal links</h3>
                        <Button
                            style={{ margin: 8 }}
                            onClick={() => {
                                window.open('https://www.instagram.com/csakitheone/', '_blank');
                            }}
                            icon={<Icon
                                path={mdiInstagram}
                                size={1}
                            />}
                            label='Instagram'
                        />
                    </Card>
                </Row>
            </Column>
            <AppNavBar selectedItem='home' />
        </Page>
    );
};

export default HomePage;
