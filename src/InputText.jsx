import { useState } from "react"
export default function InputText({onChange}) {
    return (
        <div>
            <input type="text" onChange={onChange} value={text} />
        </div>
    )
}