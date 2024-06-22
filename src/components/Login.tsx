import React from "react";

type propTypes = {
	openLogic: boolean;
	onClose: ()=> void;
}
const Login: React.FC<propTypes> = ({openLogic, onClose}) =>{
	return (
    <div className={`fixed z-50 inset-0 flex justify-center items-center transition-colors ${openLogic ? "visible bg-black/20" : "invisible"}
	  `} onClick={onClose}>
      <div className={`bg-white rounded-lg shadow p-6
      transition-all max-w-md ${openLogic ? "scale-100 opacity-100" : "scale-110 opacity-0"}`} onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-averia-libre font-bold">Login</h1>
          <input type="email" className="h-12 w-full border-sky-200 border-2 rounded-lg p-2" placeholder="Your email"></input>
          <input type="password" className="h-12 w-full border-sky-200 border-2 rounded-lg p-2" placeholder="Password"></input>
          <button className=" w-full rounded-lg py-2 px-10 bg-sky-400 hover:bg-sky-600 text-black font-averia-libre font-bold text-2xl" onClick={onClose}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;