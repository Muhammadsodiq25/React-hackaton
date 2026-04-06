import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Abdulaziz from "./pages/abdulaziz/Abdulaziz";
import Dashboard from "./pages/akbarshox/Dashboard";
import Products from "./pages/abdulbosit/Products";

const App = () => {
  return (
    <div className="flex w-full justify-between items-start">
      <Sidebar />
      <div className="flex flex-col gap-5 w-[90%]">
        <Header />
        <div className="w-[90%] flex flex-col gap-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/abdulbosit" element={<Products />} />
            <Route path="/abdulaziz" element={<Abdulaziz />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
