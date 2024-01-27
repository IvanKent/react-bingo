import './bingo.css'
import { useState } from 'react'

import InputText from './InputText'
export default function Box({value}) {

    return (
        <div>
            <button className='box'>{value}</button>
        </div>
    )
}