"use client";

import "@css/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@graphql/client";
import DashboardLayoutContainer from "@components/DashboardLayoutContainer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <DashboardLayoutContainer>{children}</DashboardLayoutContainer>
    </ApolloProvider>
  );
};

export default DashboardLayout;
