import React from "react";
import Header from "../components/header";

function LayoutUser({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}

export default LayoutUser;
