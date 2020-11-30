import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import About from "../About/About";
import Tracker from "../Tracker/Tracker";
import TrackerCard from "../Tracker/TrackerCard.js";
import FavoriteOrgCard from "../FavoriteOrgCard/FavoriteOrgCard";
import OrganizationCardContainer from "../OrganizationCard/OrganizationCardContainer";
import HighlightedOrg from "../HighlightedOrg/HighlightedOrg";
import StripeContainer from "../Stripe/StripeContainer";
import OrganizationSearch from "../OrganizationSearch/OrganizationSearch";

function App() {
  const [holding, setHolding] = useState([]);

  //used to pull the user's profile information and store it in holding
  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        let result = data.result[0]._id
        if(result === undefined || result === null) result = []
        setHolding(result);
      });
  }, []);

  return holding.length > 0 ? ( //This portion will show when holding is filled
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header user={holding}/>
            <Home />
            <Footer />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/signup">
            <Header user={holding}/>
            <Signup />
            <Footer />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/login">
            <Header user={holding}/>
            <Login />
            <Footer />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/about">
            <Header user={holding}/>
            <About />
            <Footer />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/organizationsearch/:id">
          <Header user={holding}/>
          <OrganizationSearch />
          <Footer />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/profile">
            <Header user={holding}/>
            <Tracker user={holding}/>
            <FavoriteOrgCard user={holding}/>
            <Footer />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/stripe/:id">
            <Header user={holding}/>
            <StripeContainer user={holding}/>
            <Footer />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/generalOrgs">
            <Header user={holding}/>
            <HighlightedOrg />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  ) : (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Header user={holding}/>
          <Home />
          <Footer />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/signup">
          <Header user={holding}/>
          <Signup />
          <Footer />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/login">
          <Header user={holding}/>
          <Login />
          <Footer />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/about">
          <Header user={holding}/>
          <About />
          <Footer />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/organizationsearch/:id">
        <Header user={holding}/>
        <OrganizationSearch />
        <Footer />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/generalOrgs">
          <Header user={holding}/>
          <HighlightedOrg />
          <Footer />
        </Route>
      </Switch>
    </Router>
  </div>
  )
}

export default App;
