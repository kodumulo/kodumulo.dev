import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => {
  return (
    <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
      <article key={node.fields.slug}>
        <h3>
          {node.frontmatter.title || node.fields.slug}
          <time className="thumbnail-date" dateTime={node.frontmatter.date}>
            {node.frontmatter.date}
          </time>
        </h3>
        <article dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </article>
    </Link>
  )
}
