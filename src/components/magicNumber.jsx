import React, { useState, useRef } from "react";

function MagicNumber() {
    const magicNumber = 5;
    const secondMagicNumber = 10;
    const [messages, setMessages] = useState({
        p: "There is a hidden magic Number",
        button: "Click me until you reach the magic Number"
    });
    const count = useRef(0);

    const handleClick = () => {
        count.current = count.current + 1; 
        if (count.current === magicNumber) {
            setMessages({
                p: "You have reached the magic Number",
                button: "Click to see the second magic number"
            });
        } else if (count.current === secondMagicNumber) {
            setMessages({
                p: "You have reached the second magic Number",
                button: "This is the end"
            });
        }
    };

    return (
        <div>
<p style={{ color: count.current === magicNumber ? "green" : count.current === secondMagicNumber ? "red" : "black" }}>{messages.p}</p>
            <button onClick={handleClick}>{messages.button}</button>
        </div>
    );
}

export default MagicNumber;
