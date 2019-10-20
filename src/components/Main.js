import React from 'react';
import {Switch, Route} from 'react-router';
import Bus from './Bus';
import AddBus from './AddBus';
import LoginPage from './LoginPage'

const Main = () => (
  <div>
    <main>
        <Switch>
            <Route exact path ="/" component={LoginPage}/>
            <Route exact path="/create" component={AddBus}/>
            <Route exact path="/bus" component={Bus}/>
        </Switch>
    </main>
  </div>

);

export default Main;
