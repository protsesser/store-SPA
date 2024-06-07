import { useState } from "react";
import Login from "./Login";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
	return(
    <header className=" h-auto">
      <nav className="flex">
        <div className=" top-0 w-full h-16 bg-white flex flex-row shadow-lg rounded-2xl my-4 mx-0 px-6 items-center ">
          <div className="flex-1 flex gap-8 justify-start mr-auto">
            <h2>Home</h2>
            <h2>Home</h2>
            <h2>Home</h2>
          </div>
          <div className="flex ">
            <h2>Logo</h2>
          </div>
          <div className="flex-1 flex gap-8 justify-end ml-auto items-center">
            <button className="" onClick={() => setOpen(true)}>Login</button>

            <button className="bg-sky-300 h-12 w-12 flex items-center justify-center rounded-2xl shadow-lg">
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m4.05108 8.9199c.04175-.51955.47556-.9199.99679-.9199h13.90423c.5213 0 .9551.40035.9968.9199l.8775 10.9199c.0935 1.164-.8258 2.1602-1.9936 2.1602h-13.66564c-1.16773 0-2.08711-.9962-1.99357-2.1602z"/><path d="m16 11v-5c0-2.20914-1.7909-4-4-4-2.20914 0-4 1.79086-4 4v5"/></g></svg>
            </button>
          </div>
        </div>
      </nav>
      <Login open={open} onClose={()=>setOpen(false)}/>
    </header>
	);
}

export default NavBar;