import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Category from './components/Category'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
     <Header/>
     <main>
       <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/recipes' component={Category}/>
        
       </Switch>
     </main>
    </div>
  );
}

export default App;
