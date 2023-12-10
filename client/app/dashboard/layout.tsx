"use client";

import "@css/globals.css";
import { SidebarComponent } from "@components/Sidebar";
import DashboardTopBar from "@components/DashboardTopBar";
import { useStore } from "@lib/useStore";
import { useEffect, useState } from "react";
import { ApolloProvider, useQuery } from "@apollo/client";
import { GETAUTHENTICATEDUSER } from "@graphql/auth";
import { redirect } from "next/navigation";
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
