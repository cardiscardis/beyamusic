import React from "react";

const DashboardHeader = () => {
    return (
        <>
        <div className="row" style={{clear: "both"}}>
            <div className="col-12 rounded p-5" style={{textAlign: "center"}}>
                    <div className="d-flex align-items-center mb-4 mx-auto" style={{width: "250px"}}><div className="avatar avatar--xl"><div className="avatar__image"><img src="images/users/avatar.png" alt="user" /></div></div><div className="ps-3"><input type="file" id="profile" className="d-none" /><label htmlFor="profile" className="btn btn-default rounded-pill">Change image</label></div></div>
                    <h5>@Gerard K.</h5>
                    <h6 style={{color: "#d6ccc2"}}>Total Credit: 30 Days / 20 Days Left</h6>
                    <div className="row mx-auto" style={{width: "250px"}}>
                        <div className="col-6"><button type="button" className="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#addCredit">Add Credit</button></div>
                        <div className="col-6"><button type="button" className="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#shareCredit">Share Credit</button></div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default DashboardHeader