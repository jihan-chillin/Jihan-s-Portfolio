import React, {useState, useCallback} from 'react';
import { SideContainer } from './SideBar.styles';

function Sidebar(){
    const [showSidemenu, setShowSidemenu] = useState(false)

    return(
        <SideContainer showSidemenu={showSidemenu}>
            
        </SideContainer>
    )
}

export default Sidebar                          