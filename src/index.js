import React from 'react';
import ReactDOM from 'react-dom';
import { disableReactDevTools} from '@fvilers/disable-react-devtools';

import './index.css';
import App from './App';

if(process.env.NODE_ENV === 'production'){
    disableReactDevTools();
}

ReactDOM.render(<App />, document.getElementById('root'));