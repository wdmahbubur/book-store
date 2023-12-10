import { SidebarComponent } from "@components/Sidebar";
import DashboardTopBar from "@components/DashboardTopBar";
import { useStore } from "@lib/useStore";
import { useEffect, useState } from "react";
import { ApolloProvider, useQuery } from "@apollo/client";
import { GETAUTHENTICATEDUSER } from "@graphql/auth";
import { redirect } from "next/navigation";
import client from "@graphql/client";

const DashboardLayoutContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    isSidebarOpen,
    setSidebar,
    isAuthenticated,
    setUser,
    setIsAuthenticated,
  } = useStore();
  const [innerWidth, setInnerWidth] = useState(0);
  const auth = isAuthenticated;
  const { loading, error, data } = useQuery(GETAUTHENTICATEDUSER);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, []);

  useEffect(() => {
    const isMobile = () => {
      if (innerWidth < 576) {
        setSidebar(false);
      } else {
        setSidebar(true);
      }
    };
    isMobile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [innerWidth]);

  useEffect(() => {
    if (data) {
      setUser(data.getAuthenticatedUser);
      setIsAuthenticated(true);
    }
    if (error) {
      setIsAuthenticated(false);
      redirect("/login");
    }
  }, [auth, data, error, setIsAuthenticated, setUser]);

  return (
    <section className="grid grid-cols-12 relative">
      <aside
        className={`fixed sm:relative sm:col-span-4 md:col-span-3 lg:col-span-2 transition-all duration-300 ease-linear z-50 ${
          isSidebarOpen ? "left-0" : "-left-full"
        }`}
      >
        <SidebarComponent />
      </aside>
      <div
        className={
          isSidebarOpen
            ? "col-span-full sm:col-span-8 md:col-span-9 lg:col-span-10"
            : "col-span-full"
        }
      >
        <DashboardTopBar />
        {children}
      </div>
    </section>
  );
};

export default DashboardLayoutContainer;
