import AOS from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import "aos/dist/aos.css";

AOS.init();
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* user pages */}
        <div>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}

            {privateRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
