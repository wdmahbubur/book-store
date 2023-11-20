import { NavbarComponent } from "@components/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <NavbarComponent />
      </header>
      {children}
    </div>
  );
};

export default HomeLayout;
