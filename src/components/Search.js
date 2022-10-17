import React, { useState, useEffect } from "react"
import axios from "axios"

const Search = () => {
    
    const [term, setTerm] = useState('programming')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })

            setResults(data.query.search)
        }
        search()

    }, [debouncedTerm])

    // useEffect(() => {
    //     const search = async () => {
    //         const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             }
    //         })

    //         setResults(data.query.search)
    //     }

    //     if(term && !results.length) {
    //         search()
    //     } else {

    //         const timeoutId = setTimeout(() => {
    
    //             if( term ) {
    //                 search()
    //             }
    //         }, 500)
    
    //         return () => {
    //             clearTimeout(timeoutId)
    //         }
    //     }


    // }, [term, results.length])

    // useEffect(() => {
    //     console.log('I ONLY RUN ONCE')
    // }, [])
    // useEffect(() => {
    //     console.log('I RUN AFTER EVERY RENDER AND AT INITIAL RENDER')
    // }, [term])

    const onInputChange = (e) => {
        setTerm(e.target.value)
    }

    const renderResults = results.map(({ pageid, title, snippet }) => {
        return (
            <div key={pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${pageid}`}>
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input"
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderResults}
            </div>
        </div>
    )
}

export default Search