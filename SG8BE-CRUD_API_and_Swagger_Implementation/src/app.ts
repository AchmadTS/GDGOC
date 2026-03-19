import express from "express"

import categoryRoutes from "./routes/category.route.js"
// import publisherRoutes from "./routes/publisher.route"
import authorRoutes from "./routes/author.route.js"
import bookRoutes from "./routes/book.route.js"
import loanRoutes from "./routes/loan.route.js"
import memberRoutes from "./routes/member.route.js"

import { swaggerDocs } from "./docs/swagger.js"
import { errorHandler } from "./middlewares/error.middleware.js"

const app = express()
app.use(express.json())
swaggerDocs(app)

app.use("/categories", categoryRoutes)
// app.use("/publishers", publisherRoutes)
app.use("/authors", authorRoutes)
app.use("/books", bookRoutes)
app.use("/members", memberRoutes)
app.use("/loans", loanRoutes)

app.use(errorHandler)

export default app