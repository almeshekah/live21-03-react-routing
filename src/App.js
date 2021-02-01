import { AppWrapper } from "./components/styles";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";
import {Switch, Route} from "react-router";
import { Redirect } from "react-router-dom";

const App = ({ instructors }) => {
 
  

  return( 
    <AppWrapper>
      <Switch>
        <Route exact path = "/">
          <Home instructors={instructors}/>
        </Route>
        <Route path = "/instructors/:nameSlug">
          <InstructorProfile instructors={instructors}/>
        </Route>
        <Route path = "/404">
          <NotFound />
        </Route>
        <Redirect to ="/404"/>
      </Switch>
    </AppWrapper>
  );
};

export default App;
