import {MainPage} from "./pages/MainPage.jsx";
import {AboutPage} from "./pages/AboutPage.jsx";
import {SpecialistsPage} from "./pages/SpecialistsPage.jsx";
import {ContactsPage} from "./pages/ContactsPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";

export default [
    {path: "/", Component: MainPage},
    {path: "/about", Component: AboutPage},
    {path: "/specialists", Component: SpecialistsPage},
    {path: "/contacts", Component: ContactsPage},
    {path: "*", Component: NotFoundPage},
]
