import express from 'express'
import renderPage from './renderPage'

function main() {
  let app = express()
  app.use(express.static(process.env.HM_PUBLIC_PATH, { index: false }))
  app.get('*', async (req, res) => {
    let html = await renderPage(req.url)
    res.send(html)
  })
  app.listen(3001, () => {
    console.log('Hypermediator web server listening on port 3001')
  })
}

// Make it happen
main()
