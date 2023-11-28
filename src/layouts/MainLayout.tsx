import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"

function MainLayout(){
    return(
        <main className="flex flex-col py-[3.5rem] overflow-auto">
            <Nav/>
            <section className="">
                <Outlet/>
            </section>
        </main>
    )
}

export default MainLayout