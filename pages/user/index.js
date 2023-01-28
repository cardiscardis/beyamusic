import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from '@next/font/google'
import AllTracks from '../../components/dashboard/AllTracks'
import Tracks from '../../components/dashboard/Tracks'
import PopulaTracks from '../../components/dashboard/PopulaTracks'
import Albums from '../../components/dashboard/Albums'
import Visiteduser from '../../components/visiteduser/VisitedUserHeader'

//const inter = Inter({ subsets: ['latin'] })

export default function Userprofle() {
  return (
    <>
      <Visiteduser />
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
          </li>
          <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-populatrack-tab" data-bs-toggle="pill" data-bs-target="#pills-populatrack" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Popular Tracks</button>
          </li>
          <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-tracks" type="button" role="tab" aria-controls="pills-tracks" aria-selected="false">Tracks</button>
          </li>
          <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-albums-tab" data-bs-toggle="pill" data-bs-target="#pills-albums" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Albums</button>
          </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
          <AllTracks />
        </div>
        <div className="tab-pane fade" id="pills-populatrack" role="tabpanel" aria-labelledby="pills-populatrack-tab">
          <PopulaTracks />
        </div>
        <div className="tab-pane fade" id="pills-tracks" role="tabpanel" aria-labelledby="pills-tracks-tab">
          <Tracks />
        </div>
        <div className="tab-pane fade" id="pills-albums" role="tabpanel" aria-labelledby="pills-albums-tab">
          <Albums />
        </div>
      </div>
    </>
  )
}
