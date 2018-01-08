import React, {Component} from 'react';
import {render} from 'react-dom';
import Main from './Main';

import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
    render() {
        return (
            <div>
               <Main/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
