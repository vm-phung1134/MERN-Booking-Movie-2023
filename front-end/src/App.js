import AOS from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import "aos/dist/aos.css";
import Zendesk, { ZendeskAPI } from "./ZendexConfig";
const ZENDESK_KEY = "b6035ad1-2d71-4d43-b7f0-7c66196d2e3c";
AOS.init();
export default function App() {
  const handleLoaded = () => {
    ZendeskAPI("messenger", "open");
  };
  return (
    <BrowserRouter>
      <div className="App">
        {/* user pages */}
        <div>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <>
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <>
                        <Page />
                        <Zendesk
                          defer
                          zendeskKey={ZENDESK_KEY}
                          onLoaded={handleLoaded}
                        />
                      </>
                    }
                  />
                  ;
                </>
              );
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
