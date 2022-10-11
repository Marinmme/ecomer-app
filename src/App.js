import './App.scss';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
//Pages
import {Home,Contact,Login,Register,Reset} from './pages/index';
//components
import {Header,Footer} from './components/index'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
  <Router>
  <ToastContainer></ToastContainer>
  <Header></Header>
 
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route  path="/contact" element={<Contact></Contact>}></Route>
      <Route  path="/login" element={<Login></Login>}></Route>
      <Route  path="/register" element={<Register></Register>}></Route>
      <Route  path="/reset" element={<Reset></Reset>}></Route>
      {/* <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/" element={<Home></Home>}></Route> */}
    </Routes>
    <Footer></Footer>
  </Router>
    </div>
  );
}

export default App;
