import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import MyProfile from './component/Dashboard/MyProfile';
import Setting from './component/Dashboard/Setting';
import AddMember from './component/Dashboard/AddMember';
import MyTeam from './component/Dashboard/MyTeam';
import Error from './pages/Error';
import Report from './component/Dashboard/Report';
import ViewReport from './component/Dashboard/ViewReport';
import PrivateRoute from './component/SecureRoute/PrivateRoute';
import AdminSuperAdmin from './component/SecureRoute/AdminSuperAdmin';
import ManagerRoute from './component/SecureRoute/ManagerRoute';
import SuperAdminRoute from './component/SecureRoute/SuperAdminRoute';

function App() {
  return (
    <div className="min-h-screen bg-richblack-900">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route element={<Dashboard/>}>
          <Route path='/dashboard/my-profile' element={
            <PrivateRoute>
              <MyProfile/>
            </PrivateRoute>
          } />
          <Route path='/dashboard/setting' element={
            <PrivateRoute>
              <Setting/>
            </PrivateRoute>
            } />
          <Route path='/dashboard/add-member' element={
            <ManagerRoute>
            <AddMember/>
          </ManagerRoute>
          } />
          <Route path='/dashboard/add-user' element={<AddMember/>} />
          <Route path='/dashboard/my-team' element={
            <AdminSuperAdmin>
              <MyTeam/>
            </AdminSuperAdmin>
          } />
          <Route path='/dashboard/report' element={
            <ManagerRoute>
              <Report/>
            </ManagerRoute>
          } />
          <Route path='/dashboard/reports' element={
            <SuperAdminRoute>
              <ViewReport/>
            </SuperAdminRoute>
          } />

          
        
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
