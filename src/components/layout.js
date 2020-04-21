import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <Header />
    <div
      style={{
        maxWidth: '800px',
        margin: 'auto',
        padding: '0 0.75rem',
        overflow: 'hidden',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Benedict Kitingu",
          "email": "benlegendj@gmail.com",
          "image": "https://drive.google.com/uc?id=1DWBWax_DJCH-oetqBRxYzWGul2ZDcTak",
          "url": "htts://kitingu.com",
          "jobTitle": "Full Stack Developer",
          "gender": "http://schema.org/Male",
          "sameAs": [
            "https://github.com/kitingu",
            "https://www.linkedin.com/in/kitingu/",
            "http://instagram.com/benlegendj",
            "https://twitter.com/benlegendj",
            "https://blog.kitingu.com/rss.xml"
          ]
        }`,
        }}
      />
      <div>{children}</div>
    </div>
    <Footer />
  </>
)

export default Layout
