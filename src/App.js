import "./App.css";
import Camelot from "./Components/DataGrid";
//import {DataGrid} from '@mui/x-data-grid';

function App()
{
  return <div className = "App">
    <div class="header">
      <h1 class="lines-effect">Camelot Challenge 1</h1>
      <Camelot />
    </div>
  </div>;
}

export default App;