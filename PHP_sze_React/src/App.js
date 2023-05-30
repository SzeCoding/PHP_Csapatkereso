import Login from "./components/login";
import PageContainer from "./components/pagecontainer";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import TeamList from "./components/teamlist";
import ViewTeam from "./components/viewteam";
import ProtectedRoutes from "./protectedroutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="/" exact element={<ProtectedRoutes />}>
        <Route path="csapatkereso" element={<PageContainer />}>
          <Route path=":courseid" element={<TeamList />}></Route>
          <Route path=":courseid/:teamid" element={<ViewTeam />}></Route>
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
