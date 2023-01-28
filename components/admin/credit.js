//import { Inter } from '@next/font/google'
import {useRouter} from 'next/router';

//const inter = Inter({ subsets: ['latin'] })

export default function AdminCredit() {

  return (
    <>
        <div className="row mb-5">
            <div className="col-2">
                <select className="form-select">
                    <option>All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
            </div>
            <div className="col-2">
                <select className="form-select">
                    <option>All</option>
                    <option>15 days</option>
                    <option>30 days</option>
                </select>
            </div>
            <div className="col-2">
                <select className="form-select">
                    <option>All</option>
                    <option>Admin</option>
                    <option>User</option>
                </select>
            </div>
            <div className="col-6" style={{textAlign: 'right', clear: 'both'}}>
                <p className="ff-montserrat">
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addnewcreditModal" style={{background:'#6caf17', borderColor: '#6caf17'}}>Create Credit</button>
                </p>
            </div>
        </div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Card #</th>
                <th scope="col">Active</th>
                <th scope="col">Duration</th>
                <th scope="col">User</th>
                <th scope="col">Phone #</th>
                <th scope="col">Country</th>
                <th scope="col">City</th>
                <th scope="col">Price</th>
                <th scope="col">Author</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>BEYA-30457</td>
                    <td>True</td>
                    <td>30 Days</td>
                    <td>Isaac</td>
                    <td>+243 99 456 187</td>
                    <td>DR.CONGO</td>
                    <td>Kinshasa</td>
                    <td>$5</td>
                    <td>User</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>BEYA-45650</td>
                    <td>False</td>
                    <td>30 Days</td>
                    <td>Gerard K</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>$5</td>
                    <td>Admin</td>
                </tr>
            </tbody>
        </table>
        {/* Add Credit Modal */}

        <div className="modal fade" id="addnewcreditModal" tabIndex="-1" aria-labelledby="addnewcreditModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addnewcreditModalLabel">Create New Credit</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="creditDuration" className="form-label">Duration</label>
                            <select className="form-select" id="creditDuration">
                                <option>15 days</option>
                                <option>30 days</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="creditPrice" className="form-label">Price</label>
                            <input type="number" className="form-control" id="creditPrice" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Create Credit</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
