import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import '../styles/uses.scss'

function index() {
  return (
    <Layout>
      <SEO title="Uses" description="A page dedicated to the language/framework/tools and other stuff I use daily" />

      <h1 className="uses-header">Things I use to get stuff done</h1>

      <main className="uses">
        <section className="uses-section">
          <h2>Language</h2>
          <li>
            <span className="uses-subheader">CSS -</span> Either you love it or hate, guess which side I'm on
          </li>
          <li>
            <span className="uses-subheader">Javascript -</span> Daily driver
          </li>
          <li>
            <span className="uses-subheader">Python -</span> Who doesn't like 🐍
          </li>
          <li>
            <span className="uses-subheader">Java -</span> Did some Desktop applications using it
          </li>
        </section>

        <section className="uses-section">
          <h2>Framework</h2>
          <li>
            <span className="uses-subheader">React -</span> Love it
          </li>
          <li>
            <span className="uses-subheader">Vue -</span> Always React first
          </li>
          <li>
            <span className="uses-subheader">Next.js -</span> SSR in React!
          </li>
        </section>

        <section className="uses-section">
          <h2>Gear</h2>
          <li>
            <span className="uses-subheader">Lenovo Thinkpad -</span> Windows at work
          </li>
          <li>
            <span className="uses-subheader">Toshiba Tecra A50 -</span> Linux at home
          </li>
        </section>

        <section className="uses-section">
          <h2>Tools</h2>
          <li>
            <span className="uses-subheader">VSCode -</span> The best editor out there
          </li>
        </section>
      </main>
    </Layout>
  )
}

export default index
