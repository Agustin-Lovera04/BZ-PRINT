import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Index from "../components/Index";


export default function Router() {
    return (
        <BrowserRouter  basename="/BZ-PRINT">
            <Routes>
                <Route path="/" element={<Index />} />

            </Routes>
        </BrowserRouter>
    );
}