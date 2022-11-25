import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App'


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

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
