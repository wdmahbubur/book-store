"use client";

import { NavbarComponent } from "@components/Navbar";
import { ApolloProvider } from "@apollo/client";
import client from "@graphql/client";
import AlertComponents from "@components/AlertComponents";
import { useStore } from "@lib/useStore";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { alertType, alertMessage } = useStore();

  return (
    <div>
      <header>
        <NavbarComponent />
      </header>
      <ApolloProvider client={client}>{children}</ApolloProvider>
      <AlertComponents
        type={alertType as "error" | "success" | undefined}
        message={alertMessage}
      />
    </div>
  );
};

export default HomeLayout;
