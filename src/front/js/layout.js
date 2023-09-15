import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import injectContext, { Context } from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Clients } from "./pages/clients";
import Login from "./pages/login";
import ForgotPass from "./pages/fotgotPass";
import AboutUs from "./pages/aboutUs";
import OurServices from "./pages/ourServices";
import ChangePass from "./pages/changePass";
import { Users } from "./pages/users";
import { ContactUs } from "./pages/contactUs";
import { JobsAdmi } from "./pages/jobsAdmi";
import { JobsTechnical } from "./pages/jobsTechnical";
import BackToTopBtn from "./component/backToTopBtn";
import PrivateRoutes from "./utils/privateRoutes"
import { AboutProject } from "./pages/aboutProject";





//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    const {store, actions} = useContext(Context)
    
    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<ForgotPass />} path="/forgotPass" />
                        <Route element={<ChangePass />} path="/changePass" />
                        <Route element={<AboutUs />} path="/aboutus" />
                        <Route element={<OurServices />} path="/ourServices" />
                        <Route element={<ContactUs />} path="/contactUs" />
                        <Route element={<AboutProject/>} path="/aboutproject"/>
                        <Route element={<PrivateRoutes role={"admin"}/>}>
                            <Route element={<JobsAdmi />} path="/jobs/admi" />
                            <Route element={<Clients />} path="/clients" />
                            <Route element={<Users />} path="/users" />
                        </Route>    
                        <Route element={<PrivateRoutes role={"technical"}/>}>
                            <Route element={<JobsTechnical />} path="jobs/technical" />
                        </Route>                   
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
                <BackToTopBtn/>
            </BrowserRouter>
        </div>
    );
};
export default injectContext(Layout);
