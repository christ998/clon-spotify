import React from 'react';
interface PlayerContainer {
    children: React.ReactNode
}
function PlayerContainer({children}: PlayerContainer) {
    return (
        <div className="spotify_body">
            {children}
        </div>
    );
}

export default PlayerContainer;