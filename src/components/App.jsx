import {Route, Routes} from "react-router-dom";
import {Layout} from "./Layout";
import routes from "../routes.js";

function App() {

    return (
        <Layout>
            <Routes>
                {routes.map(({path, Component}) => <Route key={path} exact path={path} element={<Component/>}/>)}
            </Routes>
        </Layout>
    )
}

export default App
