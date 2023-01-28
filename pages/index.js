import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from '@next/font/google'
import Slider from '../components/inc/Slider'
import TopChart from '../components/inc/TopChart'
import Tracks from '../components/user/Tracks'
import Playlist from '../components/user/Playlist'
import Player from '../components/inc/Player'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Slider />
      <TopChart />
      <Tracks />
      <Playlist />
      <div className="row">
          <div className="col-sm-6 col-lg-6 p-5 rouded" style={{background: "#178037", color: "#fff"}}>
              <h3 className="mb-2" style={{color: "#fff"}}>Calling all creators</h3>
              <h5 style={{color: "#fff"}}>Get on Beyamusic to connect with fans, share your sounds, and grow your audience. What are you waiting for?</h5>
              <a href="" className="btn btn-outline-light btn-lg">Get Started</a>
          </div>
          <div className="col-sm-6 col-lg-6" style={{backgroundImage: "url(../images/cover/contetcreator.png)", backgroundPosition: "center", backgroundSize: "cover"}}></div>
      </div>
      <Player />
      <div id="backdrop"></div>
    </>
  )
}
