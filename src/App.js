import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Home from './pages/Home/Home.js'
import Resume from './pages/Resume/Resume.js'
import Portfolio from './pages/Portfolio/Portfolio.js'
import Hobbies from './pages/Hobbies/Hobbies.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/hobbies">
            <Hobbies />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
