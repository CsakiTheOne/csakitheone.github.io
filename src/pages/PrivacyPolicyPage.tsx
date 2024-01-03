import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div>
            <h1>Privacy policy</h1>

            <h3>Welcome to my Android app!</h3>

            <p>This is an open source Android app developed by Csáktornyai Ádám József.</p>

            <p>
                As an Android user myself, I take privacy very seriously.
                I know how irritating it is when apps collect your data without your knowledge.
            </p>

            <p>
                I have not programmed this app to collect any personally identifiable information. All data (app preferences like theme, etc.) created by you is stored on your device only, and can be simply erased by clearing the app's data or uninstalling it.
                If the app stores any data online, I always make sure to give users the ability to delete it.
            </p>

            <p>
                If you find any security vulnerability that has been inadvertently caused by me, or have any question regarding how the app protectes your privacy, please send me an email and I will surely try to fix it/help you.
            </p>

            <p>
                Csáktornyai Ádám József (jockahun@gmail.com)
            </p>
        </div>
    );
};

export default PrivacyPolicyPage;
