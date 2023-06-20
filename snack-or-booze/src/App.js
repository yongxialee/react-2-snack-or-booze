import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
// import DrinkMenu from "./DrinksMenu";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Theme from './theme.jpeg';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

 
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, [snacks]);
  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, [drinks ]);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
 

  return (
    <div className="App" style={{backgroundImage:`url(${Theme})`,backgroundSize:'cover', overflow:'hidden'
    }}>
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" >
             <Home  />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>

            <Route exact path="/drinks">
             <Menu items={drinks} title="drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Snack items={drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
              <Redirect to="/"/>
            </Route>
           
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
