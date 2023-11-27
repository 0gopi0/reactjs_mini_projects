import { useState } from 'react';
import NavBar from './components/NavBar';
import chair from '../src/images/chair.jpg';
import black_shirt from '../src/images/black_shirt.jpg';

function App() {
  const [items, setItems] = useState<string[]>([]);
  function addIt() {
    setItems([...items, 'new item']);
  }
  function clearIt() {
    setItems([]);
  }

  return (
    <div>
      <div className="flex m-1">
        <NavBar itemsCount={items.length} />
        <button
          type="button"
          onClick={clearIt}
          className="ml-4 bg-rose-500 rounded-2xl p-1 text-white hover:bg-black"
        >
          Clear Cart
        </button>
      </div>
      <div className="flex">
        <div className="border-4	border-indigo-600	p-2">
          <div className="	">
            <img
              src={chair}
              alt="chair"
              className="h-40 w-40 object-cover p-1"
            />
          </div>
          <h3>wooden chair:- 2000/-</h3>
          <button
            type="button"
            onClick={addIt}
            className="bg-blue-400 rounded-2xl p-1.5 ml-4 text-white hover:bg-black"
          >
            add to cart
          </button>
        </div>
        <div className="border-4 border-indigo-600 ml-2 p-2">
          <div className="	">
            <img
              src={black_shirt}
              alt="black shirt"
              className="w-40 h-40 object-cover"
            />
            <h3 className="text-center	">polo t-shirt:- 500/- </h3>
            <button
              type="button"
              onClick={addIt}
              className="bg-blue-400 rounded-2xl p-1.5 ml-4 text-white hover:bg-black"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
