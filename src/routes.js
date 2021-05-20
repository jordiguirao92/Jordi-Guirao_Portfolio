import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/contact' component={ContactPage} />
      {/* 
      <Route exact path='/portfolio' component={PortfolioPage} />
      
      */}  
    </Switch>
  </Router>
)

export default Routes;
