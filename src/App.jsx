import React, { useState, useMemo, useEffect } from 'react';
import './index.css'

export default function ToggleApp() {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div id="toggle-container">
            <button onClick={handleToggleVisiblity} id="toggle-button">Message</button>
            {isVisible && <p id="message">I love freeCodeCamp!</p>}
        </div>
    );
}

