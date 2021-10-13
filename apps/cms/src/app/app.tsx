import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Sidebar } from '@anti-food-waste/cms/parts';

export function App() {
  return (
    <Router>
      <ChakraProvider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/:menu" component={Sidebar} />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
