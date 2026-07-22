import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Logo from "./components/logo";
import Navlinks from "./components/navlinks";
import Buttons from "./components/buttons";
import Filtersidebar from "./components/filtersidebar";
import Haytararutyun from "./components/haytararutyun";
import Nkarner from "./components/nkarner"; 
import Footer from "./components/footer";
import Grancvel from "./components/grancvel";
import Gaxtniutyun from "./components/gaxtniutyun";
import Grancum2 from "./components/grancum2";
import Chat from "./components/chat"; 
import AdminChat from "./components/adminchat"; 
import Zexcher from "./components/zexcher"; 
import Carayutyun from "./components/carayutyun"; 
import Mermasin from "./components/mermasin"; 




// 34 էջերի lazy ներմուծում
const Nkar1 = lazy(() => import("./components/nkar1")); const Nkar2 = lazy(() => import("./components/nkar2"));
const Nkar3 = lazy(() => import("./components/nkar3")); const Nkar4 = lazy(() => import("./components/nkar4"));
const Nkar5 = lazy(() => import("./components/nkar5")); const Nkar6 = lazy(() => import("./components/nkar6"));
const Nkar7 = lazy(() => import("./components/nkar7")); const Nkar8 = lazy(() => import("./components/nkar8"));
const Nkar9 = lazy(() => import("./components/nkar9")); const Nkar10 = lazy(() => import("./components/nkar10"));
const Nkar11 = lazy(() => import("./components/nkar11")); const Nkar12 = lazy(() => import("./components/nkar12"));
const Nkar13 = lazy(() => import("./components/nkar13")); const Nkar14 = lazy(() => import("./components/nkar14"));
const Nkar15 = lazy(() => import("./components/nkar15")); const Nkar16 = lazy(() => import("./components/nkar16"));
const Nkar17 = lazy(() => import("./components/nkar17")); const Nkar18 = lazy(() => import("./components/nkar18"));
const Nkar19 = lazy(() => import("./components/nkar19")); const Nkar20 = lazy(() => import("./components/nkar20"));
const Nkar21 = lazy(() => import("./components/nkar21")); const Nkar22 = lazy(() => import("./components/nkar22"));
const Nkar23 = lazy(() => import("./components/nkar23")); const Nkar24 = lazy(() => import("./components/nkar24"));
const Nkar25 = lazy(() => import("./components/nkar25")); const Nkar26 = lazy(() => import("./components/nkar26"));
const Nkar27 = lazy(() => import("./components/nkar27")); const Nkar28 = lazy(() => import("./components/nkar28"));
const Nkar29 = lazy(() => import("./components/nkar29")); const Nkar30 = lazy(() => import("./components/nkar30"));
const Nkar31 = lazy(() => import("./components/nkar31")); const Nkar32 = lazy(() => import("./components/nkar32"));
const Nkar33 = lazy(() => import("./components/nkar33")); const Nkar34 = lazy(() => import("./components/nkar34"));

const nkarComponents = [
  Nkar1, Nkar2, Nkar3, Nkar4, Nkar5, Nkar6, Nkar7, Nkar8, Nkar9, Nkar10,
  Nkar11, Nkar12, Nkar13, Nkar14, Nkar15, Nkar16, Nkar17, Nkar18, Nkar19, Nkar20,
  Nkar21, Nkar22, Nkar23, Nkar24, Nkar25, Nkar26, Nkar27, Nkar28, Nkar29, Nkar30,
  Nkar31, Nkar32, Nkar33, Nkar34
];

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-center p-20 text-gray-500">Բեռնվում է...</div>}>
        <div className="w-full min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<><Logo /><Navlinks /><Buttons /><Haytararutyun /><Nkarner /> <Footer/></>} />
            
            {nkarComponents.map((Component, index) => (
              <Route 
                key={index + 1} 
                path={`/nkar${index + 1}`} 
                element={<><Logo /><Navlinks /><Component /></>} 
              />
            ))}

            <Route path="/zexcher" element={<><Logo /><Navlinks /><Zexcher /> <Haytararutyun /> <Footer/> </>} />
            <Route path="/carayutyun" element={<><Logo /><Navlinks /><Carayutyun />  </>} />
            <Route path="/mermasin" element={<><Logo /><Navlinks /><Mermasin /> <Haytararutyun /> <Footer/>  </>} />
            <Route path="/grancvel" element={<Grancvel />} />
            <Route path="/grancum2" element={<Grancum2 />} />
            <Route path="/gaxtniutyun" element={<Gaxtniutyun />} />
            <Route path="/admin-panel-chat" element={<AdminChat />} />
          </Routes>
          <Chat />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;