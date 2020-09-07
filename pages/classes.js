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
import CoverImg from '../static/hangul.jpg';
import ClassesImg from '../static/korean-classes.jpg';

export default function (props) {
  return (
      <DocumentTitle title={"Classes | " + config.siteTitle}>
        <div>
          <Splash id="contact" imageUrl={CoverImg}></Splash>
          <div className="contents typography">
            <h1>Classes</h1>
            <p>This page is under development</p>
            <p>TODO Information about official classes</p>
            <p>TODO Information about volunteer classes https://sites.google.com/site/mitkoreanclass/</p>
            <p>KSA tutors</p>
            <p>Other korean culture clubs at MIT</p>
            <img src={ClassesImg}/>
          </div>
        </div>
      </DocumentTitle>
  );
}
