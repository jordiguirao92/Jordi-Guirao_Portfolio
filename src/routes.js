import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import AboutPage from './pages/about';


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      {/* 
      <Route exact path='/portfolio' component={PortfolioPage} />
      <Route exact path='/contact' component={ContactPage} />
      */}  
    </Switch>
  </Router>
)

export default Routes;
