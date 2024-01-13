// import './App.css';
import Banner from './Component/Banner.jsx';
import ChooseAc from './Component/ChooseAc.jsx';
import Navbar from './Component/Nav.jsx'
import Car from './Component/Car.jsx';
import Oneway from './Component/Oneway.jsx';
import Discovery from './Component/Discovery.jsx';
import TableComponent from './Component/TableComponent.jsx';
import Yatri from './Component/Yatri.jsx';
import Footer from './Component/Footer.jsx';
import Steering from './Component/Steering.jsx';

function App() {
  return (
    <div style={{font:'lato'}}>
       <Navbar/>
       <Banner/>
       <Car/>
       <ChooseAc/>
       <Steering/>
       <Oneway/>
       <Discovery/>
       <TableComponent/>
       <Yatri/>
       <Footer/>
    </div>
  );
}

export default App;
