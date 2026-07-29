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
import HouseDetail from "./components/housedetail"; 

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-center p-20 text-gray-500">Բեռնվում է...</div>}>
        <div className="w-full min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<><Logo /><Navlinks /><Buttons /><Haytararutyun /><Nkarner /> <Footer/></>} />
            
            {/* ԱՅՍՏԵՂ ՈՒՂՂՎԱԾ Է՝ /nkar/:id */}
            <Route 
              path="/nkar/:id" 
              element={<><Logo /><Navlinks /><HouseDetail /></>} 
            />

            <Route path="/zexcher" element={<><Logo /><Navlinks /><Zexcher /> <Haytararutyun /> <Footer/> </>} />
            <Route path="/carayutyun" element={<><Logo /><Navlinks /><Carayutyun />  </>} />
            <Route path="/mermasin" element={<><Logo /><Navlinks /><Mermasin /> <Haytararutyun /> <Footer/>  </>} />
            <Route path="/grancvel" element={<Grancvel />} />
            <Route path="/grancum2" element={<Grancum2 />} />
            <Route path="/gaxtniutyun" element={<Gaxtniutyun />} />
            <Route path="/admin-panel-chat" element={<AdminChat />} />

            {/* Սխալ հղումների բռնման համար */}
            <Route path="*" element={<><Logo /><Navlinks /><Buttons /><Haytararutyun /><Nkarner /> <Footer/></>} />
          </Routes>
          <Chat />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;