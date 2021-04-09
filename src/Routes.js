import React, { Suspense } from "react";
import {Switch, Route} from 'react-router-dom';

const Students = React.lazy(() => import("./components/studentsList/studentsList"));
const Login=React.lazy(() => import("./components/login/login"));
const studentView=React.lazy(() => import("./components/studentView/studentView"));

const Routes = () => {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact component={Students} />
          <Route path="/login" exact component={Login} />
          <Route path="/student/:id" exact component={studentView} />
        </Switch>
      </Suspense>
    );
};
export default Routes;
  