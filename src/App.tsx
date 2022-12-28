import "./App.scss";
import Tables from "./pages/Tables/Tables";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Bill from "./components/Bill/Bill";
import Menu from "./pages/Menu/Menu";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="outlet">
        <Outlet />
      </div>
      <Bill />
    </div>
  );
}

const route = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Tables />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
