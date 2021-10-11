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
    <ChakraProvider>
      <Route exact path="/">
        <Redirect to="/overview" />
      </Route>
      <Route path="/:menu" component={Sidebar} />
    </ChakraProvider>
  );
}

export default App;
