function App() {
  return (
    <>
      <nav className="flex justify-between max-w-screen-xl mx-auto mt-2">
        <div className=" flex">
          <a href="#">
            <img
              className="w-10"
              src="../public/images/brand_logo.png"
              alt="brand logo"
            />
          </a>
          <a href="#">
            <img
              className="w-40"
              src="../public/images/brand_logo2.png"
              alt="brand logo"
            />
          </a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            {' '}
            <a href="#">Location</a>
          </li>
          <li>
            {' '}
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="pl-4 pr-4 h-6 bg-green-300	rounded 	">Login</button>
      </nav>
      <div className="flex flex-row w-9/12	mx-auto	mb-20	mt-20">
        <div className=" max-w-xl	">
          <h1 className="font-black text-8xl mb-8">EXPERIENCE LUXURY :)</h1>
          <div className="max-w-md text-base ">
            <p>
              Unleash the power of pure adrenaline with Lamborghini, where
              engineering prowess meets unparalleled luxury. Feel the pulse of
              precision craftsmanship as you command the roads with unmatched
              style and performance. Elevate every drive
            </p>
          </div>
          <div className="mt-4 font-semibold">
            <button type="button" className="bg-red-700	text-white	px-2">
              Shop Now
            </button>
            <button type="button" className="px-2 ml-6 border border-gray-800	">
              Category
            </button>
          </div>
          <div className="mt-4">
            <h6 className="text-xs">Also Available On</h6>
            <div className="flex flex-row mt-2">
              <a href="#">
                <img src="../public/images/flipkart.png" />
              </a>
              <a href="#" className="ml-2 mt-1">
                <img src="../public/images/amazon.png" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-6/12	h-4/5	my-auto	">
          <img src="../public/images/one.png" />
        </div>
      </div>
    </>
  );
}

export default App;
