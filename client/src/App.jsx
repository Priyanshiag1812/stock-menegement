import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; 
import AddInventory from "./pages/AddInventory.jsx";
import InventoryTable from "./pages/InventoryTable";
import ChangeInventory from "./pages/ChangeInventory";
import IssueInventory from "./pages/IssueInventory";
import IssueInventoryTable from "./pages/IssueInventoryTable.jsx";
import ReturnInventory from "./pages/ReturnInventory";
// import RequestInventory from "./pages/RequestInventory.jsx";
import RequestInventoryTable from "./pages/RequestInventoryTable.jsx";
import Report from "./pages/Report";
import Summary from "./pages/Summary";
import ThreShold from "./pages/Threshold";
import Login from "./pages/Login";
import First from "./pages/First";
import FacultyLogin from "./pages/FacultyLogin.jsx";
import FacultySignUp from "./pages/FacultySignUp.jsx";
import ProtectedRoute from "./components/ProtectedRouter";
import SignUp from "./pages/SignUp.jsx";
import Notify from "./pages/Notify.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },


      {
        path: "/facultylogin",
        element: (
          <ProtectedRoute>
            <FacultyLogin/>
          </ProtectedRoute>
        ),
      },


      {
        path: "/facultysignUp",
        element: (
          <ProtectedRoute>
            <FacultySignUp/>
          </ProtectedRoute>
        ),
      },
    {
        path: "/add-inventory",
        element: (
          <ProtectedRoute>
            <AddInventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/inventory-table",
        element: (
          <ProtectedRoute>
            <InventoryTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/issue-inventory-table",
        element: (
          <ProtectedRoute>
            <IssueInventoryTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/request-inventory-table",
        element: (
          <ProtectedRoute>
            <RequestInventoryTable />
          </ProtectedRoute>
        ),
      },
      {
        path: "/change-inventory",
        element: (
          <ProtectedRoute>
            <ChangeInventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/issue-inventory",
        element: (
          <ProtectedRoute>
            <IssueInventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/return-inventory",
        element: (
          <ProtectedRoute>
            <ReturnInventory />
          </ProtectedRoute>
        ),
      },
      // {
      //   path: "/request-inventory",
      //   element: (
      //     <ProtectedRoute>
      //       <RequestInventory />
      //     </ProtectedRoute>
      //   ),
      // },

      {
          path: "/notify",
          element: (
            <ProtectedRoute>
              <Notify />
            </ProtectedRoute>
          ),
         },


      {
        path: "/report",
        element: (
          <ProtectedRoute>
            <Report />
          </ProtectedRoute>
        ),
      },
      {
        path: "/summary",
        element: (
          <ProtectedRoute>
            <Summary />
          </ProtectedRoute>
        ),
      },
      {
        path: "/threshold",
        element: (
          <ProtectedRoute>
            <ThreShold />
          </ProtectedRoute>
        ),
      },
    
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;