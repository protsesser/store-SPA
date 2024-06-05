import './App.css'

import ProductList from './components/ProductList';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <div className="bg-sky-300">
        <NavBar />
        <main className="justify-center flex">
          <div className="">
            <ProductList />
          </div>
        </main>
      </div>
    </>
  )
}

export default App