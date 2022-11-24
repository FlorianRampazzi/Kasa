import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Apartments from './pages/Apartments'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
        {
            path: "/apartment",
            element: <Apartments />,
        }
    ]
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// export default function App() {
//   return (
//     <Router>
//       <div>
//         <Header />

//         <Routes>
//           <Route path="/about">
//             <About />
//           </Route>
//           {/* <Route path="/product">
//             <Product />
//           </Route> */}
//           <Route exact path="/">
//             <Home />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }
