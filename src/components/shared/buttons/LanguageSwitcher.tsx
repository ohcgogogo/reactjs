import React, {useContext} from 'react';
import {I18nContext, useTranslation} from 'react-i18next';

function LanguageSwitchButton() {
    const { i18n } = useTranslation();
    // const {i18n} = useContext(I18nContext);
    const changeLanguage = (lng : string) => {
        i18n.changeLanguage(lng).then(r => {});
    };

    return (
        <div>
            <button onClick={() => changeLanguage('ko')}>ko</button>
            <button onClick={() => changeLanguage('en')}>en</button>
            <h3>Current Language: {i18n.language}</h3>
        </div>
    );
}

export default LanguageSwitchButton;


