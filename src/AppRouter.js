import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Contact from './pages/Contact.screen';
import Home from './pages/Home.screen';
import Pricing from './pages/Pricing.screen';
import Works from './pages/Works.screen';
export default function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/trabajos" component={Works} />
          <Route exact path="/precios" component={Pricing} />
          <Route exact path="/contacto" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
