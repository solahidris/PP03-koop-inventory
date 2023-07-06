import { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [pageState, setPageState] = useState("home");
  const [showItemVendor, setshowItemVendor] = useState(null);

  const pageNavigationHandler = (event) => {
    const buttonValue = event.target.value;
    setPageState(buttonValue);
    console.log(buttonValue, "buttonValue");
  };

  const showItemVendorHandler = (buttonValue) => {
    // const buttonValue = event.target.value;
    setshowItemVendor(buttonValue);
    console.log(showItemVendor, "buttonclick");
  };

  // const ItemList = ["Milo", "TehBoh", "Pen", "Erase"]

  return (
    <div className="bg-gradient-to-b from-stone-100 to-stone-400 min-h-[100vh]">
      <p className="text-center py-[3rem] font-bold text-4xl">Koop Inventory</p>

      {/* Page 1/4 - Home Page */}
      {pageState === "home" && (
        <div className="align-self-center min-h-[100vh]">
          <div className="flex flex-col gap-5">
            <button
              value="p1Akaun"
              onClick={pageNavigationHandler}
              className="bg-blue-500 hover:bg-blue-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans"
            >
              AKAUN
            </button>
            <button
              value="p1Item"
              onClick={pageNavigationHandler}
              className="bg-green-500 hover:bg-green-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans"
            >
              ITEM
            </button>
            <button
              value="p1Vendor"
              onClick={pageNavigationHandler}
              className="bg-red-500 hover:bg-red-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans"
            >
              VENDOR
            </button>
            <p className="text-center">maybe revisit later 7/7/23 - solah</p>
          </div>
        </div>
      )}

      {/* Page 2/4 - Akaun Page */}
      {pageState === "p1Akaun" && (
        <div className="flex flex-col gap-5">
          <button
            value="p1Akaun"
            onClick={pageNavigationHandler}
            className="bg-blue-500 hover:bg-blue-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans"
          >
            AKAUN
          </button>
          <div>
            <p className="text-center font-bold py-3">User Details</p>
            <p className="text-center">Megah Holdings</p>
            <p className="text-center">Profit: RM100,000,000</p>
            <p className="text-center pb-3">Register Date: 6 July 2023</p>
          </div>
          <button
            value="home"
            onClick={pageNavigationHandler}
            className="bg-sky-500 hover:bg-sky-600 rounded-lg py-[1rem] mx-[5rem] text-center text-white font-sans"
          >
            home
          </button>
        </div>
      )}

      {/* Page 3/4 - Item Page */}
      {pageState === "p1Item" && (
        <div className="flex flex-col gap-5">
          <button
            value="p1Item"
            onClick={pageNavigationHandler}
            className="bg-green-500 hover:bg-green-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans"
          >
            ITEM
          </button>
          <div>
            <div className="flex justify-center">
              {data.map((vendor) => (
                <button
                  key={vendor.vendorName}
                  value={vendor.vendorName.toString()}
                  onClick={() => showItemVendorHandler(vendor.vendorName)}
                  className="bg-blue-500 hover:bg-blue-600 text-white mr-2 px-2 py-3 rounded-lg"
                >
                  {vendor.vendorName}
                </button>
              ))}
            </div>

            <div className="flex justify-center bg-stone-100 mx-[5rem] rounded-lg mt-[1.5rem] py-[2rem]">
              {data.map((vendor, index) => (
                <div key={index}>
                  {vendor.vendorName === showItemVendor && (
                    <div>
                      <p className="text-xl font-bold">{vendor.vendorName}</p>
                      <ul>
                        {vendor.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            {item.itemName} - {item.price}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-5">
              <p className="font-bold underline">Adjust Quantity</p>
            </div>
            <div className="flex justify-center mt-5">
              <div className="mr-5 flex flex-col">
                <input
                  placeholder="dropdown choose item"
                  className="bg-stone-100/80 border-stone-500/50 border-2 hover:bg-stone-100 p-[0.2rem] rounded-lg"
                ></input>
                <label className="text-sm italic">Current Quantity: 10</label>
              </div>
              <div>
                <div></div>
                <div className="flex">
                  <button className="flex-grow bg-red-600 hover:bg-red-700 text-white mr-1 px-[0.8rem] py-[0.2rem] font-bold text-lg rounded-lg">
                    -
                  </button>
                  <button className="flex-grow bg-green-600 hover:bg-green-700 text-white px-[0.8rem] py-[0.2rem] font-bold text-lg rounded-lg">
                    +
                  </button>
                </div>
                <button class="bg-sky-500 hover:bg-sky-700 rounded-full text-white px-5 py-2 mt-1 text-sm font-bold">
                  Save changes
                </button>
              </div>
            </div>
          </div>

          <button
            value="home"
            onClick={pageNavigationHandler}
            className="bg-sky-500 hover:bg-sky-600 rounded-lg py-[1rem] mx-[5rem] text-center text-white font-sans"
          >
            home
          </button>
        </div>
      )}

      {/* Page 4/4 - Vendor Page */}
      {pageState === "p1Vendor" && (
        <div className="flex flex-col gap-5">
          <button
            value="p1Vendor"
            onClick={pageNavigationHandler}
            className="bg-red-500 hover:bg-red-600 rounded-lg py-[2rem] mx-[5rem] text-center text-white font-sans"
          >
            VENDOR
          </button>
          <div></div>
          <button
            value="home"
            onClick={pageNavigationHandler}
            className="bg-sky-500 hover:bg-sky-600 rounded-lg py-[1rem] mx-[5rem] text-center text-white font-sans"
          >
            home
          </button>
        </div>
      )}

      <div className="pb-[10rem]"></div>
    </div>
  );
}

export default App;
