const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("te amo gringa");
});
 const port=3000;

app.listen(process.env.port || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});