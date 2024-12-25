import { Outlet } from "react-router-dom"
import Admin from "../pages/Admin"
import Header from "../../components/layouts/header"


export const PublicLayout = () => {
    return <>
        <Header />
        <Outlet />
    </>
}
export const AdminLayout = () => {
    return <>
        <Admin />
        <Outlet />
    </>
}