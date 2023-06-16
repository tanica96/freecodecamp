"use strict"

const http = require("http")
const urlParse = require("url-parse")
const querystring = require('querystring');
const servePublic = require("./public")

const {search, info} = require("./api")

const app = http.createServer((req, res) => {
  const parsedUrl = urlParse(req.url)

  if (parsedUrl.pathname.substr(0, 8) === "/public/") {
    return servePublic(parsedUrl, res)
  }
  if (parsedUrl.pathname.substr(0, 5) === "/api/") {
    if (parsedUrl.pathname === "/api/search") {
      const parsedQuery = querystring.parse(parsedUrl.query)
      if ("q" in parsedQuery) {
        const q = "" + parsedQuery["q"]
        search(q)
          .then((data) => {
            res.writeHead("200", {"Content-Type": "application/json"})
            res.write(JSON.stringify(data))
            res.end()
          })
          .catch((err) => {
            res.writeHead("500", {"Content-Type": "text/plain"})
            res.write("Error 500: Es ist ein Fehler aufgetreten")
            res.end()
          })
        return 
      } else {
        res.writeHead(422, {"Content-Type": "text/plain"})
        res.write("Error 422: Parameter q fehlt!")
        res.end()
        return 
      }
    }
    if (parsedUrl.pathname === "/api/info") {
      const parsedQuery = querystring.parse(parsedUrl.query)
      if ("q" in parsedQuery) {
        const q = "" + parsedQuery["q"]
        info(q)
          .then((data) => {
            res.writeHead("200", {"Content-Type": "application/json"})
            res.write(JSON.stringify(data))
            res.end()
          })
          .catch((err) => {
            res.writeHead("500", {"Content-Type": "text/plain"})
            res.write("Error 500: Es ist ein Fehler aufgetreten")
            res.end()
          })
        return 
      } else {
        res.writeHead(422, {"Content-Type": "text/plain"})
        res.write("Error 422: Parameter q fehlt!")
        res.end()
        return 
      }
    }
  }

  res.writeHead(404, {"Content-Type": "text/plain"})
  res.write("Error 404: Datei wurde nicht gefunden!")
  res.end()

})

app.listen(8081)