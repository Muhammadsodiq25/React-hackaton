import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Akbarshox from "./pages/akbarshox/Akbarshox";
import Abdulbosit from "./pages/abdulbosit/Abdulbosit";
import Abdulaziz from "./pages/abdulaziz/Abdulaziz";

const App = () => {
  return (
    <div className="flex w-full justify-between items-start">
      <Sidebar />
      <div className="flex flex-col gap-5 w-[90%]">
        <Header />
        <div className="w-[90%] flex flex-col gap-6">
          <Routes>
            <Route path="/" element={<Akbarshox />} />
            <Route path="/abdulbosit" element={<Abdulbosit />} />
            <Route path="/abdulaziz" element={<Abdulaziz />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
