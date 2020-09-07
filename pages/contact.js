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
import CoverImg from '../static/contact.jpg';
import PusheenImg from '../static/pusheen.gif';

export default function (props) {
  return (
      <DocumentTitle title={"Contact | " + config.siteTitle}>
        <div>
          <Splash id="contact" imageUrl={CoverImg}></Splash>
          <div className="contents typography">
            <h1>Contact</h1>
            <p>Hello!</p>
            <p>For any inqueries you can email the exec team at: <a href="mailto:kca-exec@mit.edu">kca-exec@mit.edu</a></p>
            <p>Follow KCA on Facebook for photos from the events and important announcements: <a href="https://www.facebook.com/MIT-KSA-198424940189002/">MIT KSA Facebook page.</a></p>
            <p>To report a typo on the website or make a suggestion, email the current web-master: <a href="mailto:slv@mit.edu">slv@mit.edu</a></p>
            <p>MIT KCA welcomes any donations. Please use the exec email listed above and contact us if you are interested to make a contribution to spreading Korean culture at MIT campus.</p>
          </div>
          <a id="pusheen" href="https://www.youtube.com/watch?v=lJtHNEDnrnY"><img src={prefixLink(PusheenImg)} height={50}/></a>
        </div>
      </DocumentTitle>
  );
}
