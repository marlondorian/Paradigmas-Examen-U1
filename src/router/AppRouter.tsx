import { Route, Routes } from "react-router";
// import { Navbar } from "../presentation/components/layout/Navbar"
import { CatalogPage, HomePage } from "../presentation/pages";
import { Navbar } from "../presentation/components/layout/Navbar";
// import { CatalogPage, HomePage } from "../presentation/pages";

export const AppRouter = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
            </Routes>
        </div>
    )
}