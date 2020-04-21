import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Portfolio from '../templates/portfolio'

function index() {
  return (
    <Layout>
      <SEO
        title="Benedict Kiting'u — Software Developer"
        description="Benedict Kiting'u is a fullstack Web developer based in Nairobi, Kenya. You can reach out to him at benlegendj@gmail.com. "
      />
      <Portfolio />
    </Layout>
  )
}

export default index
