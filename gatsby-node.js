const path = require('path')
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const eventTemplate = path.resolve('src/templates/EventTemplate.js')

  const { data: { graphcms: { events } } } = await graphql(`
    query {
      graphcms {
        events {
          name,
          date,
          id,
          startedAt,
          percentage
        }
      }
    }
  `)

  events.forEach(event => {
    createPage({
      path: slugify(event.name),
      component: eventTemplate,
      context: { event }
    })
  })



}