import { Outlet } from "react-router-dom";
import Header from "../organisms/Header/Header";

  
  export const Layout = () => {
    return (
      <main>
        <Header />
        <Outlet />
      </main>
    )
  };