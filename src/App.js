import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header/index';
import NotFound from './components/NotFound/index';
import AlbumFeature from './features/Album/index';
import CounterFeature from './features/Counter/index';
import ProductFeature from './features/Product/index';
import TodoFeature from './features/Todo/index';

function App() {

  return (
    <div className="App">
      <Header />

      <Switch>

        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />

        <Route component={NotFound} />

      </Switch>

    </div>
  );
}

export default App;
