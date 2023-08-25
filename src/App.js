import './App.css';
import Banner from './componets/Banner/Banner';
import NavBar from './componets/NavBar/NavBar';
import {originals,action,comedy,thrill,romance} from './urls'
import RowPost from './componets/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      
      <RowPost url={originals} title='Netflix Originals'   />
      <RowPost url={action} title=' Action'  isSmall />
      <RowPost url={comedy} title=' Comedy'  isSmall />
      <RowPost url={thrill} title=' horror '  isSmall />
      <RowPost url={romance} title=' romance '  isSmall />





    </div>
  );
}

export default App;
