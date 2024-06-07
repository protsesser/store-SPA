import './App.css'
import ProductList from './components/ProductGrid';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <div className="bg-sky-300 flex justify-center">
        <div className="w-11/12 text-xl">
        <NavBar />
        <main className="justify-center flex ">
          <div className="">
            <div className=" h-1/6 justify-center items-center flex text-4xl">
              <h1>Banner coming soon</h1>
            </div>
            <ProductList />
          </div>
        </main>
        </div>
      </div>
    </>
  )
}

export default App