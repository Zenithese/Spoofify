import React from 'react'

class Search extends React.Component {
    constructor(props){
        super(props)


    }

    render() {
        return (
            <div className="search-container">
                <section className="search">
                    <div className="search-header">
                        <div className="search-input-box">
                            <div className="content-spacing">
                                <input type="text" className="search-input-box-input" placeholder="Start typing..." />
                            </div>
                        </div>
                    </div>
                        <div className="search-content">
                            <div className="content-spacing">
                                <div className="search-body">
                                    <div>
                                        <ul className="search-body-list">
                                            <li>
                                                <a className="search-body-result" href="">
                                                    <h1>Around the World (La La La La La) (Radio Version)</h1>
                                                    <span>ATC</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <button className="clear-button">CLEAR RECENT SEARCHES</button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                </section> 
            </div> 
        )
    }
}

export default Search;