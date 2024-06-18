import React, {} from 'react';
import '../index.scss';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {BrowserHistory, createBrowserHistory} from 'history';
import App from '@/pages/app/App';
import {Provider} from 'react-redux';
import {setupStore} from '@/store/store';


const history: BrowserHistory = createBrowserHistory();
const root = createRoot(document.getElementById('root'));


root.render(
    <Provider store={setupStore()}>
        <Router>
            <App/>
        </Router>
    </Provider>
);
