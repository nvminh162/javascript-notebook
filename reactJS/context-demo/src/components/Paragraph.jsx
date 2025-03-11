import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Paragraph = () => {
    const context = useContext(ThemeContext)

    return (
        <div className={context.theme}>
            <p>This is Paragraph</p>
        </div>
    )
}

export default Paragraph
