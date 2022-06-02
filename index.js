const express = require('express')
const authorRouter = require("./routers/authorRouter")
const bookRouter = require("./routers/bookRouter")
const categoryRouter = require("./routers/categoryRouter")
const publisherRouter = require("./routers/publisherRouter")


const logger=require("./middlewares/logger")
const errorHandling = require("./middlewares/errorHandling");

const server = express();
server.use(express.json())
server.use(logger);

server.use("/authors", authorRouter);
server.use("/books", bookRouter);
server.use("/categories", categoryRouter);
server.use("/publishers", publisherRouter);




server.get('/', (req, res) => {
    res.send("Express'ten selamlar!")
})

server.use(errorHandling);

server.listen(5000, () => {
    console.log("localhost://5000 adresine gelen istekler dinleniyor...")
})