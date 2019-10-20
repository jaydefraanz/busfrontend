import React from 'react';
import {Switch, Route} from 'react-router';
import Bus from './Bus'

const Main = () => (
  <div>
    <main>
        <Switch>
            <Route exact path ="/" component={Bus}/>
        </Switch>
    </main>
  </div>

);

export default Main;
