import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import SamplePost from './pages/SamplePost';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/post/:slug" component={SamplePost} />
        <Route exact path="/Contact/" component={Contact} />
      </Switch>
    </div>
  );
}
export default App;
