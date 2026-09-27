import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

// it's new way of creating root for react 18
// I know that the guidelines stated the following:
// import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// )