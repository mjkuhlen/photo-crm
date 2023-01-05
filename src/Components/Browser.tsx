import { NavLink } from "@mantine/core"
import { Link } from "react-router-dom"


function Browser() {


    return (
        <>
            <NavLink
                label="Imports"
                childrenOffset={10}
                defaultOpened
                fs={'italic'}
            >
                <NavLink 
                    label="All"
                    component={Link}
                    to='/all'
                />
                <NavLink 
                    label="Last Import"
                    component={Link}
                    to="/lastImport"
                />
            </NavLink>
            <NavLink
                label="Date Published"
                fs={'italic'}
                childrenOffset={10}
                defaultOpened
            >
                <NavLink 
                    label="2023" />
                <NavLink 
                    label="2022" />
                <NavLink 
                    label="2021" />
            </NavLink>
            <NavLink
                label="Collections"
                fs={'italic'}
                childrenOffset={10}
                defaultOpened
            >

            </NavLink>
        </>
    )
}

export default Browser