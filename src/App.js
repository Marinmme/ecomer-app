import './App.scss';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
//Pages
import {Home,Contact} from './pages/index';
//components
import {Header,Footer} from './components/index'

function App() {
  return (
    <div className="App">
  <Router>
  <Header></Header>
 
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/contact" element={<Contact></Contact>}></Route>
      {/* <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/" element={<Home></Home>}></Route> */}
    </Routes>
    <Footer></Footer>
  </Router>
    </div>
  );
}

export default App;
