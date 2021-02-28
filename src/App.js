import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Home from './pages/Home/Home.js'
import Resume from './pages/Resume/Resume.js'
import Portfolio from './pages/Portfolio/Portfolio.js'
import Hobbies from './pages/Hobbies/Hobbies.js'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  App: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    minWidth: '100vw',
  },
}))

function App() {
  const { App } = useStyles()

  return (
    <div className={App}>
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/hobbies" exact>
            <Hobbies />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
