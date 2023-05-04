import React from "react";

function Tabs(props) {
    const { setcontent } = props
    const tabs = [
        { items: 'Tab1', content: 'Tab1 is showing here' },
        { items: 'Tab2', content: 'Tab2 is showing here' },
        { items: 'Tab3', content: 'Tab3 is showing here' }]

    const ClickButton = (e) => {
        setcontent(tabs[e.target.id].content)
        const index = e.target.id;
        if (index === "2") {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        } else { }

    }

    return (
        <>
            <div>
                {tabs ? tabs.map((item, index) => (
                    <button key={index} onClick={ClickButton} id={index}>{item.items}</button>
                )) : ""}
            </div>
        </>
    )
}

export default Tabs