"use client";

import "@css/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@graphql/client";
import DashboardLayoutContainer from "@components/DashboardLayoutContainer";
import AlertComponents from "@components/AlertComponents";
import { useEffect } from "react";
import { useStore } from "@lib/useStore";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { alert, alertType, alertMessage, dismissAlert } = useStore();
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <ApolloProvider client={client}>
      <DashboardLayoutContainer>{children}</DashboardLayoutContainer>
      <AlertComponents type={alertType} message={alertMessage} />
    </ApolloProvider>
  );
};

export default DashboardLayout;
