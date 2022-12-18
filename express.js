const express = require('express')
var cors = require('cors')
const app = express()
const port = 5555

app.use(cors())

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.get('/city/:name', (req, res) => {

  const { name } = req.params

  if(name == "korea") {
    res.json({'city' : '부산광역시, 인천광역시, 대구광역시, 대전광역시, 광주광역시, 울산광역시'})
  } else if(name == "usa") {
    res.json({'city' : 'Louisiana, Maine, Maryland'})
  } else {
    res.json({'city':'알수없음'})
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})