import React, { Component } from 'react'
import '../App.css';
import GameItem from '../components/GameItem'
import Form from '../components/Form'
import { connect } from 'react-redux'
import { fetchGames } from '../actions/index'


// import { addNewTodo } from '../actions/index'

class Game extends Component {

    componentDidMount() {
        this.props.fetchGames()
    }

    constructor(props) { 
        super(props);   
        this.state = { 
            game: [],
            title: []
        };
    }

    sortClick = () => {
        this.setState({game: !this.state.game})
    }

    render() {
        // const games = this.props.games.map((game, i) => <GameItem key={i} game={game} />)
        let games = this.props.games.map((game, i) => <GameItem key={i} game={game} />)

        if (this.state.title === true){
            const tetrisGame = this.props.games.filter(game => game.title === "tetris")
            games = tetrisGame.map((game, i) => <GameItem key={i} game={game} />)
        }

        const gameSort = this.props.game.sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return 0;
        })

        if (this.state.game === true) {
            gameSort.map((game, i) => <GameItem key={i} game={game} />)
        }

     
        // debugger
        return (
            <div>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.sortClick}>Sort</button>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.editSearchTerm}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className="wrapper">{games}</div>
                <Form handleOnSubmit={this.addNewTodo} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    // debugger
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames })(Game)



