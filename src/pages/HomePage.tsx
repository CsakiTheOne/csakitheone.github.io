import React, { useContext } from 'react';
import Page from '../ui/components/Page';
import Column from '../ui/components/Column';
import ThemeContext from '../ui/theme/Theme';
import Button from '../ui/components/Button';
import Icon from '@mdi/react';
import { mdiDownload, mdiGithub, mdiInstagram, mdiYoutube } from '@mdi/js';
import Card from '../ui/components/Card';
import Row from '../ui/components/Row';
import wholesomeWareIcon from '../res/icons/path';
import { useNavigate } from 'react-router-dom';
import AppNavBar from '../components/AppNavBar';
import publicFiles from '../res/values/publicFiles';

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
                <p style={{ padding: 8 }}>
                    I'm a {age} year old software developer from Hungary.
                    I love making mobile apps, but I can also make websites,
                    desktop apps, games, development tools and more.
                </p>
                <Card style={{ margin: 8, padding: 8 }}>
                    <h3 style={{ padding: 8 }}>Socials</h3>
                    <Row>
                        <Button
                            style={{ margin: 8, width: '50%' }}
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
                            style={{ margin: 8, width: '50%' }}
                            onClick={() => {
                                window.open('https://www.instagram.com/csakitheone/', '_blank');
                            }}
                            icon={<Icon
                                path={mdiInstagram}
                                size={1}
                            />}
                            label='Instagram'
                        />
                    </Row>
                </Card>
                <h2 style={{ padding: 8 }}>Coding since 2012</h2>
                <p style={{ padding: 8 }}>
                    I started coding when I was 11 years old.
                    It all started when my older sister made me do her IT homeworks.
                    I really enjoyed learning about computers and programming,
                    so I started to learn by myself. I started with dotNET Basic,
                    HTML, CSS and later in school I learned C# and C++.
                    Most of my knowledge comes from home learning and experimenting.
                    Since then I learned many languages, frameworks and technologies.
                </p>
                <Card style={{ margin: 8, padding: 8 }}>
                    <h3 style={{ padding: 8 }}>10 year OG pack</h3>
                    <p style={{ padding: 8 }}>
                        In 2022 I celebrated my 10th anniversary of coding
                        by making a collection of my early projects.
                        Disclaimer: I was a kid and I'm Hungarian :D
                    </p>
                    <div style={{ textAlign: 'right' }}>
                        <Button
                            style={{ margin: 8 }}
                            onClick={() => {
                                window.open('https://youtu.be/JklcPesoyis?si=ALWmChF-7ClhCzlU', '_blank');
                            }}
                            icon={<Icon
                                path={mdiYoutube}
                                size={1}
                            />}
                            label='Watch montage video'
                        />
                        <Button
                            style={{ margin: 8 }}
                            onClick={() => {
                                window.open(publicFiles['10YearOGPack']);
                            }}
                            icon={<Icon
                                path={mdiDownload}
                                size={1}
                            />}
                            label='Get the collection'
                        />
                    </div>
                </Card>
                <Card style={{ margin: 8, padding: 8 }}>
                    <h3 style={{ padding: 8 }}>Promise of a brand</h3>
                    <p style={{ padding: 8 }}>
                        In my "10 years of coding" video I promised that I will bring all my supported projects under one brand.
                        Guess what?
                    </p>
                    <div style={{ textAlign: 'right' }}>
                        <Button
                            style={{ margin: 8 }}
                            onClick={() => {
                                navigate('/wholesomeware');
                            }}
                            icon={<Icon
                                path={wholesomeWareIcon}
                                size={1}
                            />}
                            label='Check out WholesomeWare'
                        />
                    </div>
                </Card>
            </Column>
            <AppNavBar selectedItem='home' />
        </Page>
    );
};

export default HomePage;
