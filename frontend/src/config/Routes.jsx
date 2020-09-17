import React from 'react'
import {Switch, Route,Redirect} from 'react-router'

import Todo from '../components/todo/Todo';
import About from '../components/about/About';

export default props=>
<Switch>
    <Route exact path='/todos' component={Todo}/>
    <Route exact path='/about' component={About}/>
    <Redirect from='*' to='/' />
</Switch>