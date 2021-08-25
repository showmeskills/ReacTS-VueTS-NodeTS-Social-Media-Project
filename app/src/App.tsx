import { Fragment, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { mainRouter } from "@/route/index";
import Loader from "@/components/Loader/index";


function App() {
  return (
    <Fragment>
      <Switch>
        <Suspense fallback={<Loader/>}>
          {
            mainRouter.map(route => {
              return (
                <Route
                  key={route.pathname}
                  path={route.pathname}
                  exact={route.exact}
                  render={() => <route.component />}
                />
              )
            })
          }
           <Redirect from="*" to="/login"/>
        </Suspense>
      </Switch>
    </Fragment>
  )
}

export default App;
