import React from "react";

const DashboardTable = () => {
    return (
        <>
        <div class="row">
            <div class="col-lg-4 col-sm-6">
            <div class="cover cover--round shadow-sm p-3 mb-5 bg-white rounded" style={{backgroundColor: "#fff"}}>
                <h5 style={{color: "#d6ccc2", fontWeight: "400"}}>Total Listener</h5>
                <h5 style={{color: "#222"}}>10.865</h5>
            </div>
            </div>
            <div class="col-lg-4 col-sm-6">
            <div class="cover cover--round shadow-sm p-3 mb-5 bg-white rounded" style={{backgroundColor: "#fff"}}>
                <h5 style={{color: "#d6ccc2", fontWeight: "400"}}>Total Streams</h5>
                <h5 style={{color: "#222"}}>200 M</h5>
            </div>
            </div>
            <div class="col-lg-4 col-sm-6">
            <div class="cover cover--round shadow-sm p-3 mb-5 bg-white rounded" style={{backgroundColor: "#fff"}}>
                <h5 style={{color: "#d6ccc2", fontWeight: "400"}}>Countries</h5>
                <h5 style={{color: "#222"}}>1</h5>
            </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <div class="cover cover--round shadow-sm p-3 mb-5 rounded" style={{backgroundColor: "#178037"}}>
                    <h5 style={{color: "#d6ccc2", fontWeight: "400"}}>Total Earned</h5>
                    <h5 style={{color: "#fff"}}>$10.865</h5>
                    <div style={{padding: "15px 0"}}>
                    <h5 style={{color: "#d6ccc2", fontWeight: "400"}}>Next Payment (July 15, 2023)</h5>
                    <h5 style={{color: "#fff"}}>$500</h5>
                    <button type="button" class="btn btn-light w-100">Windraw</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-sm-6">
                <div class="cover cover--round shadow-sm p-3 mb-5 bg-white rounded" style={{backgroundColor: "#fff"}}>
                    <h5 style={{color: "#d6ccc2", fontWeight: "400"}}>Places Most Played</h5>
                    <div style={{height: "165px", overflowY: "scroll", overflowX: "none"}}>
                    <table class="table table-borderless w-100">
                        <thead>
                            <tr>
                                <th scope="col-4">Country</th>
                                <th scope="col-4">City</th>
                                <th scope="col-4">Number Of Listeners</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DR, Congo</td>
                                <td>Kinshasa</td>
                                <td>24k</td>
                            </tr>
                            <tr>
                                <td>Congom Brazza</td>
                                <td>Kalemi</td>
                                <td>240k</td>
                                </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DashboardTable