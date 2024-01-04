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
import wholesomeWareHeader from '../res/images/wholesomeware_header.jpg';
import AppNavBar from '../components/AppNavBar';

interface HomePageProps { }

const HomePage: React.FC<HomePageProps> = () => {
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <Page
            style={{
                backgroundColor: theme.colorScheme.secondaryContainer,
                color: theme.colorScheme.onSecondaryContainer,
            }}
        >
            <Column style={{ padding: 8 }}>
                <Card
                    style={{ margin: 8 }}
                >
                    <img
                        style={{ width: '100%', height: 'auto' }}
                        src={wholesomeWareHeader}
                        alt=""
                    />
                </Card>
                <p style={{ padding: 8 }}>
                    WholesomeWare is a software brand created by me.
                    Graphics are made by my friend, <a
                        style={{ color: theme.colorScheme.primary }}
                        href="https://www.instagram.com/t.doradesign/"
                        target='_blank'
                        rel='noopener noreferrer'
                    >Dóri</a>.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        style={{ margin: 8 }}
                        icon={<Icon
                            path={mdiGooglePlay}
                            size={1}
                        />}
                        label='Check all my apps on Google Play'
                        onClick={() => {
                            window.open('https://play.google.com/store/apps/dev?id=8177011913013516936', '_blank');
                        }}
                    />
                </div>
            </Column>
            <AppNavBar style={{ backgroundColor: theme.colorScheme.primaryContainer }} selectedItem='wholesomeware' />
        </Page>
    );
};

export default HomePage;
