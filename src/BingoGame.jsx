import BoxContainer from './BoxContainer'
import { useState } from 'react'
export default function BingoGame() {
    const [text, setText] = useState('')

    function inputText(evt){
        setText(evt.target.value)
    }
    return (
        <div>
            <input type="text" value={text} onChange={inputText} />
            {/* <BoxContainer/> */}
        </div>
    )
}