import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../../actions/playlist_actions'
import { clearSearches, fetchResults } from '../../../actions/search_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        playlists: Object.values(state.entities.playlists),
        searchInput: ownProps.searchInput
    };
};

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    clearSearches: () => dispatch(clearSearches()),
    fetchResults: () => dispatch(fetchResults()),
});

class Search extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
            searchInput: "",
            results: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
    }

    componentWillMount() {
        
        this.props.fetchPlaylists();
    }

    handleChange(e) {
        // e.preventDefault();
        debugger
        this.setState({ searchInput: e.target.value })
        this.searchQuery();
    }

    searchQuery() {
        debugger
        this.setState({ results: this.props.playlists.filter(playlist => playlist.title.toUpperCase().includes(this.state.searchInput.toUpperCase())) })
    }

    render() {
        debugger
        // let filtered = this.props.playlists.filter(playlist => playlist.title === this.state.searchInput)
        // let filtered = this.props.playlists;
        let styled = this.state.results.map(playlist => {
            return (
                <Link to={`/${playlist.id}`} className="main-playlist">
                    <div className="main-playlist-image">
                        <img className="playlist-image" src={playlist.photoUrl} />
                    </div>
                    <div className="main-playlist-title">{playlist.title}</div>
                </Link>
            )
        })

        return (
            <div className="search-container">
                <section className="search">
                    <div className="search-header">
                        <div className="search-input-box">
                            <div className="content-spacing">
                                <input type="text" 
                                    className="search-input-box-input" 
                                    placeholder="Start typing..." 
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </div>
                        </div>
                    </div>
                        <div className="search-content">
                            <div className="content-spacing">
                                <div className="search-body">
                                    <a className="search-body-result" href="">
                                        <h1>So Many Choices</h1>
                                        <span>;)</span>
                                        <div className="main-playlists">
                                            {styled}
                                        </div>
                                        <button onClick={() => this.clearSearches()} className="clear-button">CLEAR RECENT SEARCHES</button>
                                    </a>
                                </div>
                            </div> 
                        </div>
                </section> 
            </div> 
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Search);

// export default Search;

// {
// filtered.length > 0 ? filtered : (
//     <ul className="search-body-list">
//         <li>
//             <a className="search-body-result" href="">
//                 <h1>Around the World (La La La La La) (Radio Version)</h1>
//                 <span>ATC</span>
//             </a>
//         </li>
//     </ul>
// )
// }