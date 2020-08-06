const express = require('express')
const app = express()
const port = 3000

// Test comment

import { LoremIpsum } from "lorem-ipsum";

var lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 3,
    min: 2
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

app.get('/', (req, res) => res.send(lorem.generateParagraphs(7)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
