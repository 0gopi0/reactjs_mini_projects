import Like from './components/Like';
import women from './components/images/women.jpg';
import './App.css';
import { AiOutlineFundView } from 'react-icons/ai';
import { BiMessageDots } from 'react-icons/bi';
import { PiShareFatFill } from 'react-icons/pi';
function App() {
  return (
    <>
      <div className="d1 w-300">
        <img src={women} className="circle_50_radius" />
        <p className="p1">
          i hate to live a life where i could have done something and i didn't
        </p>
      </div>
      <div className="container w-300">
        <div className=" t-8 flex">
          <Like />
          <p>15k</p>
        </div>
        <div className=" t-10 flex">
          <BiMessageDots size="26" />
          <p>19k</p>
        </div>
        <div className=" t-10 flex">
          <PiShareFatFill size="26" />
          <p>13k</p>
        </div>
        <div className=" t-10 flex">
          <AiOutlineFundView size="26" />
          <p className="bm-10">15m</p>
        </div>
      </div>
    </>
  );
}

export default App;
