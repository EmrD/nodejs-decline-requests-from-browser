const express = require("express");
const app = express();
const port = 3000;

function blockBrowserRequests (req , res , next){
  const userAgent = req.headers['user-agent'] || '';

  const browserRegex = /(mozilla|chrome|safari|firefox|edge|msie|trident)/i;

  if (browserRegex.test(userAgent)){
    res.status(403).send('You can NOT access this API from a browser.');
  }

  next();
}

app.use(blockBrowserRequests)

app.get("/api/data", (req, res) => {
  res.send("Permission accepted from " + req.headers['user-agent']);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});