import React from "react";

const DashboardHeader = () => {
    return (
        <>
        <div class="row" style={{clear: "both"}}>
            <div class="col-12 rounded p-5" style={{textAlign: "center"}}>
                    <div class="d-flex align-items-center mb-4 mx-auto" style={{width: "250px"}}><div class="avatar avatar--xl"><div class="avatar__image"><img src="images/users/avatar.png" alt="user" /></div></div><div class="ps-3"><input type="file" id="profile" class="d-none" /><label for="profile" class="btn btn-default rounded-pill">Change image</label></div></div>
                    <h5>@Gerard K.</h5>
                    <h6 style={{color: "#d6ccc2"}}>Total Credit: 30 Days / 20 Days Left</h6>
                    <div class="row mx-auto" style={{width: "250px"}}>
                        <div class="col-6"><button type="button" class="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#addCredit">Add Credit</button></div>
                        <div class="col-6"><button type="button" class="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#shareCredit">Share Credit</button></div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default DashboardHeader