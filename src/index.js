import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import App from './components/App';
import { BrowserRouter, Match, Miss } from 'react-router';
import NotFound from './components/NotFound';


const Root = () => {
  return (
    <BrowserRouter>
      <div>      
        <Match exactly pattern="/" component={App} />
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
