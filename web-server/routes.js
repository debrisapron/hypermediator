import express from 'express'
import * as api from '../web-client/src/services/api'
import renderPage from './renderPage'

let router = express.Router()

// NOTE This duplicates some of the functionality in the side-effects folder in
// the web client. Fine for now, but might not scale well...

router.get('/', async (req, res) => {
  let dialogueSummaries = await api.fetchDialogueSummaries()
  let state = {
    dialogueSummaries: {
      data: dialogueSummaries
    }
  }
  let html = renderPage(req.url, state)
  res.send(html)
})

router.get('/d/:dialogueId', async (req, res) => {
  let dialogue = await api.fetchDialogue(req.params.dialogueId)
  let state = {
    dialogue: {
      data: dialogue
    }
  }
  let html = renderPage(req.url, state)
  res.send(html)
})

router.get('*', (req, res) => res.send(renderPage(req.url)))

export default router
