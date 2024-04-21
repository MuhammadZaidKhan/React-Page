import React from 'react'

const Bot = () => {
    return (
        <div>

            <df-messenger
                intent="WELCOME"
                chat-title="PizzaApp"
                agent-id="045022c3-6bd7-48ad-8f49-61bc9eef95e6"
                language-code="en"
            ></df-messenger>
        </div>
    )
}

export default Bot