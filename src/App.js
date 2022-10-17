import React, { useState } from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate"

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    },
    {
        label: 'A shade of bisque',
        value: 'bisque'
    },
    {
        label: 'A bar of chocolate',
        value: 'chocolate'
    },
    {
        label: 'What? whitesmoke',
        value: 'whitesmoke'
    }
]

const showNavItems = () => {
    if (window.location.pathname === '/') return <Accordion items={items}/>

    if (window.location.pathname === '/list') return <Search />

    if (window.location.pathname === '/dropdown') return <Dropdown />

    if (window.location.pathname === '/translate') return <Translate />
}

const App = () => {

    // const [selected, setSelected] = useState(options.sort((a, b) => { return a.value > b.value })[0])
    // const [showDropdown, setShowDropdown] = useState(true)

    return(
        <div className="ui container">
            {showNavItems()}
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toogle Dropdown</button>
            {showDropdown ? 
                <Dropdown 
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
                :
                null
            } */}
        </div>
    )
}

export default App