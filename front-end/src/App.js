import AOS from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import "aos/dist/aos.css";
import Zendesk, { ZendeskAPI } from "./ZendexConfig";
const ZENDESK_KEY = "1689d03d-8916-4d4c-b83d-b809a1f8e023";

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
