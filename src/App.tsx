import './App.css'

import ProductList from './components/ProductList';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <div className="bg-sky-300 flex justify-center">
        <div className="w-11/12">
        <NavBar />
        <main className="justify-center flex">
          <div className="">
            <ProductList />
          </div>
        </main>
        </div>
      </div>
    </>
  )
}

export default App