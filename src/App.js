import React from "react"
import EditorLib from "./EditorLib"
import "./App.css"

function App(){
    return (
        <div className='app'>
            <h2>Draft JS POC</h2>
            <p>I will try to implement DraftJS with Material UI so that I can use it in the blog.</p>
            <EditorLib/>
        </div>
    )
}

export default App