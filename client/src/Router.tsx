import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Main from "./routes/Main";
import Toilet from "./routes/Toilet";
import Mypage from "./routes/Mypage";
import WriteComment from "./routes/WriteComment";
import Token from "./components/Token";
import MyComments from "./routes/MyComments";
import WriteReport from "./routes/WriteReport";
import Admin from "./routes/Admin";
import ReportList from "./routes/ReportList";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Token />
        <Routes>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="toilet/:toiletId" element={<Toilet />} />
          <Route path="toilet/:toiletId/comment" element={<WriteComment />} />
          <Route path="my" element={<Mypage />} />
          <Route path="my/comments" element={<MyComments />} />
          <Route path="report" element={<WriteReport />} />
          <Route path="admin" element={<Admin />} />
          <Route path="admin/reports" element={<ReportList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
