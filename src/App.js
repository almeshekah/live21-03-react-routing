import { AppWrapper } from "./components/styles";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { Route, Switch } from "react-router";

const App = ({ instructors }) => {
  const [currentPage, setCurrentPage] = useState("/");

  const homemadeRouter = () => {
    switch (currentPage) {
      case "/":
        return <Home instructors={instructors} goTo={setCurrentPage} />;

      case "/instructors/hamza":
        return (
          <InstructorProfile
            instructors={instructors}
            instructorSlug="hamza"
            goTo={setCurrentPage}
          />
        );

      case "/instructors/laila":
        return (
          <InstructorProfile
            instructors={instructors}
            instructorSlug="laila"
            goTo={setCurrentPage}
          />
        );

      case "/instructors/hasan":
        return (
          <InstructorProfile
            instructors={instructors}
            instructorSlug="hasan"
            goTo={setCurrentPage}
          />
        );

      case "/404":
        return <NotFound goTo={setCurrentPage} />;

      default:
        setCurrentPage("/404");
        break;
    }
  };

  return( 
    <AppWrapper>
      <Switch>
        <Route path="/">

         <Home instructors={instructors} goTo={setCurrentPage} />
        </Route>
        <Route path = "/instructors/hamza">
          <InstructorProfile
                instructors={instructors}
                instructorSlug="hamza"
                
         />

        </Route>

        <Route path = "/instructors/hamza">
          <InstructorProfile
                instructors={instructors}
                instructorSlug="laila"
                
          />
        </Route>

        <Route path="/instructors/hamza">
          <InstructorProfile
                instructors={instructors}
                instructorSlug="hasan"
                
        />
        </Route>

        <Route path="/404">
        <NotFound  />

        </Route>
        



      




      </Switch>
    </AppWrapper>
  );
};

export default App;
