import Details from "./views/Details";
import Cart from "./views/Cart";
import Home from "./views/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/details/:id", element: <Details /> },
  ]);


  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
