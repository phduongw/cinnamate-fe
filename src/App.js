import { AllRoutes } from "./routes/AllRoutes";

import './App.css';
import {Footer, Header} from "./components";

function App() {
    return (
        <div>
            <Header />
            <AllRoutes />
            <Footer />
        </div>
    );
}

export default App;
