// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import Error from "./components/Error";
// import Home from "./components/home/Home";
// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import { taskRoutes } from "./constants";
// import { TaskProvider } from "./utils/TaskContext";

// const AppLayout = () => {
//   return (
//     <TaskProvider>
//       <Header />
//       <Outlet />
//       <Footer />
//     </TaskProvider>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/react-task-gallery",
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/react-task-gallery",
//         element: <Home />
//       },
//       ...taskRoutes
//     ]
//   }
// ]);

// function App() {
//   return <RouterProvider router={appRouter} />;
// }

// export default App;



import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error from "./components/Error";
import Home from "./components/home/Home";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import { taskRoutes } from "./constants";
import { TaskProvider } from "./utils/TaskContext";

function App() {
  return (
    <HashRouter>
      <TaskProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {taskRoutes.map(({ path, element }, idx) => (
            <Route key={idx} path={path} element={element} />
          ))}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </TaskProvider>
    </HashRouter>
  );
}

export default App;
