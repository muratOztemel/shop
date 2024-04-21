import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./routes/mainRoutes";
import "./App.css";

function App() {
  const router = createBrowserRouter([...mainRoutes]);
  return <RouterProvider router={router} />;
}

export default App;
