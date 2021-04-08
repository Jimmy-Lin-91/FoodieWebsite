import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import GroupDining from './components/GroupDining.jsx';
import GiftCards from './components/GiftCards.jsx';
import Catering from './components/Catering.jsx';
const App = () => {
  return (
    <Router>
      <div>
        <nav class='nav-container'>
          <ul class='nav'>
            <li>
              <Link to='/' class='link name'>The Squeeze</Link>
            </li>
            <li>
              <Link to='/group' class='link'>Group Dining</Link>
            </li>
            <li>
              <Link to='/giftcards' class='link'>Gift Cards</Link>
            </li>
            <li>
              <Link to='/catering' class='link'>Catering</Link>
            </li>
          </ul>
          <div class='button__container'>
            <a class='order_btn'>Order Delivery</a>
            <a class='order_btn'>Book a Table</a>
          </div>
        </nav>
        <Switch>
          <Route path='/group'>
            <GroupDining/>
          </Route>
          <Route path='/giftcards'>
            <GiftCards/>
          </Route>
          <Route path='/catering'>
            <Catering/>
          </Route>
        </Switch>
      </div>
    </Router>
  )

}
export default App;