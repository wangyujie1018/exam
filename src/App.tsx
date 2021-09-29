// import logo from '@/assets/logo.svg';  //通过别名访问路径
import './App.css';

import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from '../src/router/RouterView';
import routerList from '../src/router/routerConfig';


const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <RouterView routerList={routerList} />
      </Router>
    </div>
  );
}

export default App;
