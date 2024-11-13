import { Outlet } from "react-router-dom";
import "./assets/styles/main.scss";
import { RootLayout } from "./shared/layout";

function App() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}

export default App;
