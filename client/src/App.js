import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Category from './components/Category'
import Header from './components/Header'
import Home from './pages/Home'
import Forum from './pages/Forum'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipes/:category" component={Category} />
          <Route path="/comments" component={Forum} />
        </Switch>
      </main>
    </div>
  )
}

export default App
