import Player from "./Player";
import PlayerDetails from "./PlayerDetails";
import Sidebar from "./Sidebar";

function Layout({ children }: any) {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="absolute top-0 w-60 left-0">
        <Sidebar />
      </div>
      <div className="ml-60 mb-24">
        <div className="">{children}</div>
        <div className="w-[100vw] absolute left-0 bottom-0 bg-gradient-to-b">
          <PlayerDetails />
        </div>
      </div>
    </div>
  );
}

export default Layout;
