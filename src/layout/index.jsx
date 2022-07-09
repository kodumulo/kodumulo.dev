import React from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { ThemeSwitch } from '../components/theme-switch'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'
import { Toc } from '../components/toc'

import './index.scss'

export const Layout = ({ showToc, location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <React.Fragment>
      <Top title={title} location={location} rootPath={rootPath} />
      <div
        className="content_wrapper"
        style={{
          margin: 0,
          padding: 0,
          outline: 'none',
        }}
      >
        {showToc !== undefined ? showToc && <Toc /> : null}
        <div
          className="post_wrapper"
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(32),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <ThemeSwitch />
          <Header title={title} location={location} rootPath={rootPath} />
          {children}
          <Footer />
        </div>
      </div>
    </React.Fragment>
  )
}
