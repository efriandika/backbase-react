import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom';
import { defaultRoute, routes } from './routes';
import { NotFound } from './components/layouts/partials/NotFound';
import { LayoutDefault } from './components/layouts/LayoutDefault';

function App() {
  return (
    <AppRouter>
      <Switch>
        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            // children={<route.component />}
            render={(props) => {
              if (route.layout) {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                )
              } else {
                return (
                  <LayoutDefault {...props}>
                    <route.component {...props} />
                  </LayoutDefault>
                )
              }
            }}
          />
        ))}

        {defaultRoute !== '/' && <Redirect from="/" to={defaultRoute} exact={true} />}

        {/* NotFound page */}
        <Route path="*" component={NotFound} />
      </Switch>
    </AppRouter>
  );
}

export default App;
