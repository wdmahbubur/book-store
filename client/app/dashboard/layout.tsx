"use client";

import "@css/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@graphql/client";
import DashboardLayoutContainer from "@components/DashboardLayoutContainer";
import { useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <ApolloProvider client={client}>
      <DashboardLayoutContainer>{children}</DashboardLayoutContainer>
    </ApolloProvider>
  );
};

export default DashboardLayout;
