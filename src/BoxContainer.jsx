import Box from './Box'
import './bingo.css'
import { useState } from 'react'
import InputText from './InputText'
import { useState } from 'react'
export default function BoxContainer() {
    
    const [text, setText] = useState('')
    const handleTextChange = (evt) => {
        setText(evt.target.value)
    }

    return(
         <div className="BoxContainer">
            <InputText onChange={handleTextChange} value={text}/>
            <div className="BoxRowContainer">
                <Box value={text}/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
            <div className="BoxRowContainer">
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
            <div className="BoxRowContainer">
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
            <div className="BoxRowContainer">
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
            <div className="BoxRowContainer">
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
         </div>
    )
}