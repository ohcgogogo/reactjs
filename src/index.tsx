import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from "src/assets/styles/globalStyles";
import { theme } from "src/assets/styles/theme";
import {DefaultTheme, ThemeProvider} from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "src/utils/i18n";
import App from 'src/App';
import { Provider } from "react-redux";
import store from "src/redux/store";
import reportWebVitals from 'src/reportWebVitals';
import {TFunction} from "i18next";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </I18nextProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


