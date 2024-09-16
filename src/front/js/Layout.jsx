import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
//custom components
import ScrollToTop from "./component/ScrollToTop.jsx";
import { BackendURL } from "./component/BackendURL.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
//custom pages / views
import { Home } from "./pages/Home.jsx";
import { Demo } from "./pages/Demo.jsx";
import { Single } from "./pages/Single.jsx";
import { Characters } from "./pages/Characters.jsx";
import { DetailsCharacter } from "./pages/DetailsCharacter.jsx";
import { Planets } from "./pages/Planets.jsx";
import { DetailsPlanet } from "./pages/DetailsPlanet.jsx";
import { Starships } from "./pages/Starships.jsx";
import { DetailsStarship } from "./pages/DetailsStarship.jsx";
import { AddContact } from "./pages/AddContact.jsx";
import { EditContact } from "./pages/EditContact.jsx";
import { Contacts } from "./pages/Contacts.jsx";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Characters />} path="/characters" />
                        <Route element={<DetailsCharacter />} path="/characters/:uid" />
                        <Route element={<h1>Not found!</h1>} path="*" />
                        <Route element={<Planets />} path="/planets" />
                        <Route element={<DetailsPlanet />} path="/planets/:uid" />
                        <Route element={<Starships />} path="/starships" />
                        <Route element={<DetailsStarship />} path="/starships/:uid" />
                        <Route element={<AddContact />} path="/add-contact" />
                        <Route element={<EditContact />} path="/edit-contact" />
                        <Route element={<Contacts />} path="/contacts" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
