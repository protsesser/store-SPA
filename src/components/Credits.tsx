import React from "react";

type propTypes = {
	openCredits: boolean;
	onClose: ()=> void;
}
const Credits: React.FC<propTypes> = ({openCredits, onClose}) =>{
	return (
    <div className={`fixed z-50 inset-0 flex justify-center items-center transition-colors ${openCredits ? "visible bg-black/20" : "invisible"}
	  `} onClick={onClose}>
      <div className={`bg-white rounded-lg shadow p-6
      transition-all max-w-md ${openCredits ? "scale-100 opacity-100" : "scale-110 opacity-0"}`} onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-averia-libre font-bold">Credits</h1>
					<p className=" whitespace-pre-wrap">
							{`E-commerce interface made with 
TypeScript+React+Tailwind CSS

Created by Protsai Sergei
group 221-376`}
					</p>
        </div>
      </div>
    </div>
  );
};
export default Credits;