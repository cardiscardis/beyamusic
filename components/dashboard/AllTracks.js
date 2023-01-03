import React from "react";
import Tracks from './Tracks'
import PopulaTracks from './PopulaTracks'
import Albums from './Albums'

const AllTracks = () => {
    return (
        <>
            <PopulaTracks />
            <Tracks />
            <Albums />
        </>
    )
}

export default AllTracks