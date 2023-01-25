import { Inter } from '@next/font/google'
import {useRouter} from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function AdminCredit() {

  return (
    <>
        <div class="row mb-5">
            <div class="col-2">
                <select class="form-select">
                    <option>All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
            </div>
            <div class="col-2">
                <select class="form-select">
                    <option>All</option>
                    <option>15 days</option>
                    <option>30 days</option>
                </select>
            </div>
            <div class="col-2">
                <select class="form-select">
                    <option>All</option>
                    <option>Admin</option>
                    <option>User</option>
                </select>
            </div>
            <div class="col-6" style={{textAlign: 'right', clear: 'both'}}>
                <p class="ff-montserrat">
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addnewcreditModal" style={{background:'#6caf17', borderColor: '#6caf17'}}>Create Credit</button>
                </p>
            </div>
        </div>
        <table class="table">
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

        <div class="modal fade" id="addnewcreditModal" tabindex="-1" aria-labelledby="addnewcreditModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addnewcreditModalLabel">Create New Credit</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="creditDuration" class="form-label">Duration</label>
                            <select class="form-select" id="creditDuration">
                                <option>15 days</option>
                                <option>30 days</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="creditPrice" class="form-label">Price</label>
                            <input type="number" class="form-control" id="creditPrice" />
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Create Credit</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
