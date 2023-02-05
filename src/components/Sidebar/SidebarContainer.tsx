import React from 'react';
interface SidebarContainer {
    children: React.ReactNode
}
function SidebarContainer({children}:SidebarContainer) {
    return (
        <div className="sidebar_container">
            {children}
        </div>
    );
}

export default SidebarContainer;