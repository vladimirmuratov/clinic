import {MainPage} from "./pages/MainPage.jsx";
import {AboutPage} from "./pages/AboutPage.jsx";
import {SpecialistsPage} from "./pages/SpecialistsPage.jsx";
import {ContactsPage} from "./pages/ContactsPage.jsx";
import {NotFoundPage} from "./pages/NotFoundPage.jsx";
import {OneBlockPage} from "./pages/blocks-pages/OneBlockPage.jsx";
import {TwoBlockPage} from "./pages/blocks-pages/TwoBlockPage.jsx";
import {ThreeBlockPage} from "./pages/blocks-pages/ThreeBlockPage.jsx";
import {FourBlockPage} from "./pages/blocks-pages/FourBlockPage.jsx";
import {FiveBlockPage} from "./pages/blocks-pages/FiveBlockPage.jsx";
import {SixBlockPage} from "./pages/blocks-pages/SixBlockPage.jsx";
import {AmbulancePage} from "./pages/AmbulancePage.jsx";
import {HospitalizationPage} from "./pages/HospitalizationPage.jsx";

export default [
    {path: "/", Component: MainPage},
    {path: "/about", Component: AboutPage},
    {path: "/specialists", Component: SpecialistsPage},
    {path: "/contacts", Component: ContactsPage},
    {path: "/ambulance", Component: AmbulancePage},
    {path: "/hospitalization", Component: HospitalizationPage},
    {path: "/one-block", Component: OneBlockPage},
    {path: "/two-block", Component: TwoBlockPage},
    {path: "/three-block", Component: ThreeBlockPage},
    {path: "/four-block", Component: FourBlockPage},
    {path: "/five-block", Component: FiveBlockPage},
    {path: "/six-block", Component: SixBlockPage},
    {path: "*", Component: NotFoundPage},
]
