import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import {
  Row,
  Splash,
  Split,
} from './_sharedComponents'

import { prefixLink } from '../utils/urls.js'
import CoverImg from '../static/icecream.jpg';
import CultureShowImg from '../static/culture-show.jpg';
import GBMImg from '../static/icecream-gbm-2.jpg';
import CPWImg from '../static/cpw.jpg';

export default function (props) {
  return (
      <DocumentTitle title={"Events | " + config.siteTitle}>
        <div>
          <Splash id="events" imageUrl={CoverImg}></Splash>
          <div className="contents typography">
            <h1>Events</h1>
            <p>To see more photos from our past events, proceed to the <a href="https://www.facebook.com/MIT-KSA-198424940189002/">MIT KSA Facebook page</a>.</p>
            <p>See the following calendar with the scheduled public events.</p>
            <Calendar/>
          </div>
          <Row flipped id="gbm" imageUrl={GBMImg}>
            <h2>General Body Meetings</h2>
            <p>At regular meetings you have an opportunity to meet and hang out with other members. Another purpose of GBMs is to provide a time and place for new exec and cabinet elections.</p>
            <p>KSA events are accompained by delicious Korean cultural dishes. Be sure to check out KSA events over Campus Preview Weekend, KBBQ on the week of orientation and gelato icecream at every General Body Meeting.</p>
          </Row>
          <Row id="culture-show-small" imageUrl={CultureShowImg}>
            <h2>Culture Show</h2>
            <p>Culture Show is the biggest event KSA organizes annually. We invite Korean students clubs from all schools in Boston to come and help us to introduce the wider MIT community to the Korean culture.</p>
            <p>The every year features a unique theme, includes catered Korean dishes, games, performances by clubs like MIT Takewondo, Asian Dance Team, music bands from Berklee College of Music, MIT, Boston University, as well as other individual perfomers.</p>
            <p>Look out for emails about this years Culture Show this fall!</p>
          </Row>
          <Row id="cpw" imageUrl={CPWImg}>
            <h2>CPW Events</h2>
            <p>Traditionally KSA has been organizing an event for freshmen during Campus Preview Weekend in Spring.</p>
            <p>As many other clubs on campus, we are happy to welcome the new class to the MIT community and treat them the best we can.</p>
            <p>You can also meet KSA exec members at the CPW activities midway.</p>
          </Row>
        </div>
      </DocumentTitle>
  );
}

function Calendar () {
  return (
      <iframe id="events-calendar" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;height=400&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=mitksaexec%40gmail.com&amp;color=%235F6B02&amp;ctz=America%2FNew_York" style={{borderWidth: 0, width: 800, height: 400}} width="800" height="400" frameBorder="0" scrolling="no"></iframe>
  );
}
