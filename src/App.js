import React, { useState } from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate"
import Route from "./components/Route"
import Header from "./components/Header"

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
const App = () => {

    const [selected, setSelected] = useState(options.sort((a, b) => { return a.value > b.value })[0])

    return(
        <div className="ui container">
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}

export default App