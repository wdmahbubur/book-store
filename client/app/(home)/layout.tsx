"use client";

import { NavbarComponent } from "@components/Navbar";
import { ApolloProvider } from "@apollo/client";
import client from "@graphql/client";
import AlertComponents from "@components/AlertComponents";
import { useStore } from "@lib/useStore";
import { useEffect } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { alert, alertType, alertMessage, dismissAlert } = useStore();

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        dismissAlert();
      }, 5000);
    }
  }, [alert, dismissAlert]);

  return (
    <div>
      <header>
        <NavbarComponent />
      </header>
      <ApolloProvider client={client}>{children}</ApolloProvider>
      <AlertComponents type={alertType} message={alertMessage} />
    </div>
  );
};

export default HomeLayout;
