import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SpaceInformetion from "./pages/SpaceInformetion";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Layout from "./components/shared/Layout";
import ReserveConfirm from "./pages/ReserveConfirm";
import CreateSpace from "./pages/CreateSpace";
import History from "./pages/History";
import Dashboard from "./pages/Dashboard";
import Statistics from "./components/dashboard/statistics";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <main>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/space/:id" element={<SpaceInformetion />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reserve" element={<ReserveConfirm />} />
          <Route path="/create-space" element={<CreateSpace />} />
          <Route path="/history" element={<History />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </Layout>
    </main>
  );
}

export default App;
