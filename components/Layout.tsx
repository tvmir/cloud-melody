import Sidebar from "./Sidebar";

function Layout({ children }: any) {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="absolute top-0 w-60 left-0">
        <Sidebar />
      </div>
      <div className="ml-60 mb-24">
        <div className="h-[100vh]">{children}</div>
        <div className="absolute left-0 bottom-0">Player</div>
      </div>
    </div>
  );
}

export default Layout;
