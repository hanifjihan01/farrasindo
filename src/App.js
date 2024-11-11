import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsBaru from "./pages/AboutUsBaru";
import ContactUs from "./pages/ContactUs";
import PortfolioPage from "./pages/PortfolioPage";
import ArticlePage from "./pages/ArticlePage";
import BatchPump from "./pages/BatchPump";
import Service from "./pages/Service";
import Blend from "./pages/Blend";
import ConcretePump from "./pages/ConcretePump";
import SelfLoading from "./pages/SelfLoading";
import Stationery from "./pages/Stationery";
import TruckMixer from "./pages/TruckMixer";
import WheelLoader from "./pages/WheelLoader";
import Sell from "./pages/Sell";
import Rental from "./pages/Rental";
import Sparepart from "./pages/Sparepart";
import Products from "./pages/Products";
import PlacingBoom from "./pages/PlacingBoom";
import BatchPlant from "./pages/BatchPlant";
import MountedLinePump from "./pages/MountedLinePump"; 
import MonsterProfile from "./pages/MonsterProfile";
import SuperLBoom from "./pages/SuperLBoom";
import DoubleSLBoom from "./pages/DoubleSLBoom";
import MiniLBoom from "./pages/MiniLBoom";
import LongBoom from "./pages/LongBoom";
import ExtraDoubleSuperLongBoom from "./pages/ExtraDSLBoom";
import SemiLongBoom from "./pages/SemiLongBoom";
import Mini from "./pages/Mini";
import Hhbt from "./pages/Hhbt";



function App() {
  return (
    <div >
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="pages/AboutUsBaru.jsx" element={<AboutUsBaru/>}/>
        <Route path="pages/Service.jsx" element={<Service/>}/>
        <Route path="pages/ContactUs.jsx" element={<ContactUs/>}/>
        <Route path="pages/PortfolioPage.jsx" element={<PortfolioPage/>}/>
        <Route path="pages/ArticlePage.jsx" element={<ArticlePage/>}/>
        <Route path="pages/BatchPump.jsx" element={<BatchPump/>}/>
        <Route path="pages/Blend.jsx" element={<Blend/>}/>
        <Route path="pages/ConcretePump.jsx" element={<ConcretePump/>}/>
        <Route path="pages/SelfLoading.jsx" element={<SelfLoading/>}/>
        <Route path="pages/Stationery.jsx" element={<Stationery/>}/>
        <Route path="pages/TruckMixer.jsx" element={<TruckMixer/>}/>
        <Route path="pages/WheelLoader.jsx" element={<WheelLoader/>}/>
        <Route path="pages/Sell.jsx" element={<Sell/>}/>
        <Route path="pages/Rental.jsx" element={<Rental/>}/>  
        <Route path="pages/Sparepart.jsx" element={<Sparepart/>}/> 
        <Route path="pages/Products.jsx" element={<Products/>}/> 
        <Route path="pages/PlacingBoom.jsx" element={<PlacingBoom/>}/> 
        <Route path="pages/BatchPlant.jsx" element={<BatchPlant/>}/> 
        <Route path="pages/MountedLinePump.jsx" element={<MountedLinePump/>}/> 
        <Route path="pages/MonsterProfile.jsx" element={<MonsterProfile/>}/> 
        <Route path="pages/SuperLBoom.jsx" element={<SuperLBoom/>}/> 
        <Route path="pages/DoubleSLBoom.jsx" element={<DoubleSLBoom/>}/> 
        <Route path="pages/MiniLBoom.jsx" element={<MiniLBoom/>}/> 
        <Route path="pages/LongBoom.jsx" element={<LongBoom/>}/> 
        <Route path="pages/ExtraDoubleSuperLongBoom.jsx" element={<ExtraDoubleSuperLongBoom/>}/> 
        <Route path="pages/SemiLongBoom.jsx" element={<SemiLongBoom/>}/>
        <Route path="pages/Mini.jsx" element={<Mini/>}/>
        <Route path="pages/Hhbt.jsx" element={<Hhbt/>}/>
       
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;