import Sidebar from "./Sidebar";

function Layout({ children }: any) {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="absolute top-0 w-24 left-0">
        <Sidebar />
      </div>
      <div className="ml-72 mb-24">
        <div className="h-[100vh]">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
