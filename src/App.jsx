import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';

function App() {
  return (
    <Router>
      <Switch>
        {/* all routes that look like /users/chris will be handled by the UserProfile component */}
        <Route path="/video/:slug" component={Video} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
