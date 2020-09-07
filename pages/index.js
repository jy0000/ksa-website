import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import {
  Row,
  Splash,
} from './_sharedComponents'
import { prefixLink } from '../utils/urls.js'

import '../css/reset.css';
import '../css/fonts.css';
import '../css/styles.less';

import CoverImg from '../static/homepage.jpg';
import EventsImg from '../static/cpw-3.jpg';
import CultureShowImg from '../static/culture-show-2.jpg';
import MistiImg from '../static/misti-korea.jpg';

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <Splash id="homepage" additionalStyles={['linear-gradient(rgba(50, 13, 13, 0.45), rgba(50, 13, 13, 0.45))']} imageUrl={CoverImg}>
            Korean Students Assoc. <br/>
            <smaller>Massachusetts Institute of Technology</smaller> <br/>
            <Link className="call-to-action" to={prefixLink("/events/#culture-show-small")}>
              <span>
                CULTURE SHOW
              </span>
            </Link>
          </Splash>
            <div className="contents">
              <div className="big-letters typography">
                <p>The Korean Cultural Association, formerly known Korean Students Association, welcome people of all race, gender, sexual orienation, ethnicity, and cultural backgrounds.</p>
                <p>The Korean Students' Association exists as a non-political club to provide opportunities for Korean undergraduates at MIT to explore their Korean culture and promote the understanding of the Korean people and culture.</p>
                <p>To this aim, it holds many social, cultural, and community service events throughout the year, open to the entire MIT community.</p>
                <p>We’re here to help connect everyone interested in the Korean-American culture, good food, and great friends.</p>
              </div>
            </div>
            <hr/>
            <Row id="culture-show" imageUrl={CultureShowImg}>
              <h2>Culture Show</h2>
              <p>Culture Show is the biggest event KSA organizes annually. We invite Korean students clubs from all schools in Boston to come and help us to introduce the wider MIT community to the Korean culture.</p>
              <p>The every year features a unique theme, includes catered Korean dishes, games, performances by clubs like MIT Takewondo, Asian Dance Team, music bands from Berklee College of Music, MIT, Boston University, as well as other individual perfomers.</p>
              <p><Link to={prefixLink("/events/")}>Find out more at the events page.</Link></p>
            </Row>
            <Row flipped id="events" imageUrl={EventsImg}>
              <h2>General Body Meetings</h2>
              <p>At regular meetings you have an opportunity to meet and hang out with other members. Another purpose of GBMs is to provide a time and place for new exec and cabinet elections.</p>
              <p>KSA events are accompained by delicious Korean cultural dishes. Be sure to check out KSA events over Campus Preview Weekend, KBBQ on the week of orientation and gelato icecream at every General Body Meeting.</p>
              <p><Link to={prefixLink("/events/")}>See more events during the school year.</Link></p>
            </Row>
            <Row id="misti" imageUrl={MistiImg}>
              <h2>Immerse In Culture</h2>
              <p>Looking to learn Korean language or about Korean culture? KSA partners with MIT foreign languages department and provides tutors for anyone taking Korean langauge classes at MIT. <Link to={prefixLink("/classes/")}>Check out the classes page to learn more.</Link></p>
              <p>Thinking of going to Korea over IAP or summer? Read more about MISTI Korea and learn about other programs like GTL Korea at the <Link to={prefixLink("/misti-korea/")}>MISTI Korea page</Link>.</p>
            </Row>
        </div>
      </DocumentTitle>
    );
  }
}
