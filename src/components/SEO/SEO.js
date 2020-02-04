import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

const SEO = ({ subtitle, description }) => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = subtitle ? `${site.siteMetadata.title} | ${subtitle}` : site.siteMetadata.title;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="theme-color" content="" />
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </Helmet>
  )
}

SEO.propTypes = {
  subtitle: PropTypes.string,
  description: PropTypes.string
}

export default SEO
