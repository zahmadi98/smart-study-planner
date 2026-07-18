import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PersonalInfoPage from "./components/PersonalInfoPage";
import bg from "./assets/bg.png";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonalInfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;