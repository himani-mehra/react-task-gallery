import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error from "./components/Error";
import Home from "./components/home/Home";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { taskRoutes } from "./constants";
import { TaskProvider } from "./utils/TaskContext";
import { ToggleProvider } from "./utils/ToggleContext"
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <ToggleProvider>
        <TaskProvider>
          <Header />
          <Outlet />
          <Footer />
        </TaskProvider>
      </ToggleProvider>
    </Provider>
  );
};

const appRouter = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
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
