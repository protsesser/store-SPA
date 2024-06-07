const NavBar: React.FC = () => {
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
          <div className="flex-1 flex gap-8 justify-end ml-auto">
            <h2>Login</h2>
            <h2>Cart</h2>
          </div>
        </div>
      </nav>
    </header>
	);
}

export default NavBar;