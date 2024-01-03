import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import HomePage from './pages/HomePage';
import { setRandomMotd } from './service/motdService';

function App() {
    useEffect(() => {
        setRandomMotd();
    }, []);

    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
        </Routes>
    );
}

export default App;
