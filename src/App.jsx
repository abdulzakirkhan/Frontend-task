
import { lazy, Suspense, useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
const Dashboard = lazy(() => import("./pages/Dashboard"));
function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-white lg:overflow-hidden">

      {/* HEADER */}
      <Header onMenuClick={() => setOpen(true)} />

      {/* BODY */}
      <div className="flex flex-1 pt-12 lg:ml-60 ">

        {/* SIDEBAR */}
        <Sidebar open={open} setOpen={setOpen} />

        {/* MAIN */}
        <div className="flex-1 p-4 lg:p-6 lg:overflow-hidden border-3 !border-red-500">

          {/* <Dashboard /> */}
          <Suspense fallback={<div>Loading...</div>}>
  <Dashboard />
</Suspense>
        </div>

      </div>
    </div>
  );
}

export default App;