import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { driverInputs, truckInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="trucks">
              <Route index element={<List />} />
              <Route path=":truckId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={truckInputs} title="Add New Truck" />}
              />
            </Route>
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="drivers">
              <Route index element={<List />} />
              <Route path=":driverId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={driverInputs} title="Add New Driver" />}
              />
            </Route>
            {/* <Route path="customers">
              <Route index element={<List />} />
              <Route path=":customerId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="trips">
              <Route index element={<List />} />
              <Route path=":tripId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
