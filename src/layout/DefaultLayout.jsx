import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
    return (
        <div className="app_flex">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}