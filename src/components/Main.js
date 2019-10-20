import React from 'react';
import {Switch, Route} from 'react-router';
import Bus from './Bus';
import AddBus from './AddBus';

const Main = () => (
  <div>
    <main>
        <Switch>
            <Route exact path ="/" component={Bus}/>
            <Route exact path="/create" component={AddBus}/>
        </Switch>
    </main>
  </div>

);

export default Main;
