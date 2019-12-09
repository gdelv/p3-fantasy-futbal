import React from 'react'
import './styles/Button.css'

const Button = ({ onClick, className, title }) => {
    return (
        <button
            onClick={onClick}
            className={`${className}`}>
            {title}
        </button>
    )
}

export default Button