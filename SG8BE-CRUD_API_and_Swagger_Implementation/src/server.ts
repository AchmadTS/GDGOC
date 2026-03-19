import app from "./app.js"

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running, open docs at http://localhost:${PORT}/docs`)
})