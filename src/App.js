import { useState } from "react";
import "./App.css";

function App() {

  const [pageState, setPageState] = useState("home");

  const pageNavigationHandler = (event) => {
    const buttonValue = event.target.value;
    setPageState(buttonValue);
    console.log(buttonValue, "buttonValue");
  }

  return (
    <div className="bg-gradient-to-b from-stone-100 to-stone-400 min-h-[100vh]">
      <p className="text-center py-[3rem] font-bold text-4xl">Koop Inventory</p>

        {/* Page 1/4 - Home Page */}
      {pageState === "home" &&
      <div className="align-self-center min-h-[100vh] pt-[5rem]">
        <div className="flex flex-col gap-5">
          <button value="p1Akaun" onClick={pageNavigationHandler} className="bg-blue-500 hover:bg-blue-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans">AKAUN</button>
          <button value="p1Item" onClick={pageNavigationHandler} className="bg-green-500 hover:bg-green-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans">ITEM</button>
          <button value="p1Vendor" onClick={pageNavigationHandler} className="bg-red-500 hover:bg-red-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans">VENDOR</button>
        </div>
      </div>
      }

      {pageState === "p1Akaun" &&
        <div className="flex flex-col gap-5 mt-[5rem]">
          <button value="p1Akaun" onClick={pageNavigationHandler} className="bg-blue-500 hover:bg-blue-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans">AKAUN</button>
          <div>
            <p className="text-center font-bold py-3">User Details</p>
            <p className="text-center">Megah Holdings</p>
            <p className="text-center">Profit: RM100,000,000</p>
            <p className="text-center pb-3">Register Date: 6 July 2023</p>
          </div>
          <button value="home" onClick={pageNavigationHandler} className="bg-sky-500 hover:bg-sky-600 rounded-lg py-[1rem] mx-[5rem] text-center text-white font-sans">home</button>
        </div>
      }
      {pageState === "p1Item" &&
        <div className="flex flex-col gap-5 mt-[5rem]">
          <button value="p1Item" onClick={pageNavigationHandler} className="bg-green-500 hover:bg-green-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans">ITEM</button>
          <button value="home" onClick={pageNavigationHandler} className="bg-sky-500 hover:bg-sky-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans">home</button>
        </div>
      }
      {pageState === "p1Vendor" &&
        <div className="flex flex-col gap-5 mt-[5rem]">
          <button value="p1Vendor" onClick={pageNavigationHandler} className="bg-red-500 hover:bg-red-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans">VENDOR</button>
          <button value="home" onClick={pageNavigationHandler} className="bg-sky-500 hover:bg-sky-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans">home</button>
        </div>
      }


    </div>
  );
}

export default App;
