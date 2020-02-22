import React from 'react';
import ReactDom from 'react-dom';
import {
   HashRouter,
   Route,
   Switch
} from 'react-router-dom';
import {
   Home,
   About,
   Events,
   Products,
   Contact,
   Woops404
} from './components/pages'
import './stylesheets/globals.scss';

ReactDom.render(
   <HashRouter>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/events" component={Events}/>
         <Route path="/products" component={Products}/>
         <Route path="/contact" component={Contact}/>
         <Route component={Woops404}/>
      </Switch>
   </HashRouter>,
   document.getElementById('root')
);