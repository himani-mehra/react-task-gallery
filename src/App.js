import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error from "./components/Error";
import Home from "./components/home/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { taskRoutes } from "./constants";
import { TaskProvider } from "./utils/TaskContext";

const AppLayout = () => {
  return (
    <TaskProvider>
      <Header />
      <Outlet />
      <Footer />
    </TaskProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/react-task-gallery",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/react-task-gallery",
        element: <Home />
      },
      ...taskRoutes
    ]
  }
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
