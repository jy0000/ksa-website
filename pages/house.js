import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import ImageGallery from 'react-image-gallery'

import {
  Row,
  Splash,
  Split,
} from './_sharedComponents'

import CoverImg from '../static/house-cover.jpg';
import CommonsImg from '../static/commons.jpg';
import HouseImg from '../static/house.jpg';

import { prefixLink } from '../utils/urls.js'

export default function (props) {
  return (
      <DocumentTitle title={"House | " + config.siteTitle}>
        <div>
          <Splash id="house" imageUrl={CoverImg}/>
          <div className="contents typography">
            <h1>House</h1>
            <Split>
              <Map/>
              <div className="desc">
                <b className="address">58 Manchester Rd, Brookline, MA 02446</b>
                <p> Welcome to ZBT! We are located in Brookline, a tree-lined residential area of Boston. Brothers can walk, bike, drive, or ride our 15-passenger van to MIT’s campus. The house is within five minutes of basketball and tennis courts, several public parks, numerous restaurants, and a 24-hour supermarket. Our proximity to Boston University, Fenway Park, and Coolidge Corner guarantees that there is always something fun to do.</p>
              </div>
            </Split>
            <Row id="commons" flipped imageUrl={CommonsImg}>The house includes two floors with residencies. 18 rooms total. Common areas include: Commons, Chapter Room, Dinings, Kitchen, Party Room, Game Room, TV Room and Athena Cluster.</Row>

            <h2>Transportation</h2>
            <p>During the school time brothers drive the house van to and from MIT campus multiple times a day on the schedule.</p>
      <p>At the late hours, starting at 6pm and up until 2:30am you can take a <a href="http://web.mit.edu/facilities/transportation/shuttles/safe_ride.html">Saferide bus</a> provided by MIT. Take the Cambridge West & Brookline bus which stops in front of the house.</p>

            <h2>Summer Housing</h2>
          </div>

            <Row imageUrl={HouseImg} id="house-img">
              <p>Email zbt-president@mit.edu to apply.</p>
              <p>Summer housing includes room and access to all common areas listed here, including a fully equipped industrial kitchen, laundry room, weight room, 40'' TV for watching movies or shows, newly furnished study space, and Athena cluster.</p>
              <p>We're minutes away from local parks and local commercial plazas including Coolidge Corner. We are also a 3-minute walk from a 24-hour supermarket and a 5-minute walk from the MBTA Green Line. There will be daily van runs to and from MIT's campus, as well as the MIT Saferide shuttle every hour after 6pm.</p>
              <p>Rates are $1700/triple, $1850/double.</p>
            </Row>
        </div>
      </DocumentTitle>
  );
}

function Map() {

  return (
      <iframe
        className="google-map embed"
        height="350"
        frameBorder="0" style={{border: 0}}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBidnZGM9cqJcD96t5rqD2RZKlIi4LsZNk
        &q=Zeta+Beta+Tau,+Brookline,+MA" allowFullScreen>
      </iframe>
  );
}
