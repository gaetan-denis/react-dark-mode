import SwitchBtn from "./SwitchBtn.tsx";
import '../styles/navbar.css'

const Navbar= ({ pages }: { pages: string[] })  => {


    return(
        <nav >
            <ul>
                {pages.map((page : string) =>
                    <li key={page}>{page}</li>
                )}
                <li><SwitchBtn/></li>
            </ul>
        </nav>
    )
}
export default Navbar;
