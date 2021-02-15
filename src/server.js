const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/addRoom', async (req, res) => {
  const { name } = req.body.input;

  return res.json({
    id: "<value>"
  })

});

app.listen(PORT);
