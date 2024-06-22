import './App.css'
import ProductList from './components/ProductGrid';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-sky-300 to-sky-800 to-40% flex justify-center font-sora relative">
        <div className="w-full h-full absolute">
          <img src='https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="w-full h-fit object-cover absolute mix-blend-overlay opacity-50"/>
          <div className="w-full h-full bg-gradient-to-b from-sky-300 to-sky-800 to-40% "></div>
        </div>
        <div className="w-11/12 text-xl relative">
          <NavBar/>
          <main className="justify-center flex ">
             <div className="h-fit">
              <div className=" h-96 justify-center items-end flex text-5xl font-averia-libre pb-16">
                <div className="w-auto h-16 bg-white flex shadow-xl rounded-2xl px-8 items-center font-semibold">
                  <h1>BEST QUALITY ITEMS</h1>
                </div>
              </div>
              <ProductList />
              <footer className="flex items-end h-auto ">
                <button className="top-0 w-full h-16 bg-white flex flex-row shadow-xl rounded-2xl mb-4 mt-16 px-8 items-center justify-center font-averia-libre font-bold text-5xl" onClick={()=>globalThis.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
                  <h1>
                  ^ Levitate Up ^
                  </h1>
                </button>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App