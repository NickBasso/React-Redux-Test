// @flow

import '../styles/App.css';
import { DataList } from './DataList';

function App(): Object {
  return (
    <div className="App">
      <h1 className={'mainHeader'}>React-Redux-Test</h1>
      <DataList />
    </div>
  );
}

export default App;
