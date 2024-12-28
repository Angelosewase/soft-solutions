import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";
import Contact from "./pages/contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
