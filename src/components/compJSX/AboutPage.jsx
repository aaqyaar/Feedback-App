import React from 'react';
import Card from './shared/Card';
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
      <Card>
          <h1>About Us</h1>
          <p>These react app is feedback project to rate our service</p>
          <p>Version 10.0.0.1</p>
          <p>
             <Link to="/">Back To Home</Link>
          </p>
      </Card>
  )
}

export default AboutPage;
