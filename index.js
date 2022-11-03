const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
// app.use(bodyParser.json());

app.post("/", function (req, res) {
  res.send(req.body.user)
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/index.html'))
})

// app.post('/image', (req,res) => {
//     res.send(req)
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})