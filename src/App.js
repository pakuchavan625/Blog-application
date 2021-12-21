

import TopBar from "./topbar/TopBar";
import Login from "./pages/Loging/Login";

import SettingPage from "./pages/SettingPage/SettingPage";
import SinggelPage from "./pages/Singlepage/SinggelPage";
import WritePage from "./pages/write/WritePage";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";



function App() {
  const user =false;
  return (
  

   <div>
   
   <BrowserRouter>
   <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/register" element={user ? <Home/> :<Register />} />
        <Route path="/login" element={user ? <Home/> : <Login/>}/>
        <Route path="/write" element={user ? <WritePage/> : <Register />}/>
        <Route path="/setting" element={user ? <SettingPage/> : <Register />}/>
        <Route path="/post/:postId" element={<SinggelPage/>}/>
       
      
      
      </Routes>
    </BrowserRouter>
  
  
   </div>

  );
}

export default App;
