
import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeGame } from '../actions/index'
import Review from '../container/Review'


class GameItem extends Component {
    // console.log(game)
    // debugger

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    handleClickCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        const games = this.props.game
        return (
            <Router>
                <>
                    <div className='box'>
                        <h4>{games.id}: {games.title}</h4>
                        <Route path={`/games/${games.id}`}>
                            {games.info}
                            <br />
                            <Link to={`/games`}><button className='close'>Close</button></Link>
                        </Route>

                        <p>Like</p>{this.state.counter}


                        <Route path={`/developers/${games.id}`}>
                            <li className='fruit-header'>{games.developer}</li>
                            <br />
                            <Link to={`/games`}><button className='close'>Close</button></Link>
                        </Route>


                        <br />
                        <Link to={`/games/${games.id}`}><button className='info'>info</button></Link>
                        <Link to={`/developers/${games.id}`}><button className='fruits'>Developer</button></Link>


                        <Route path={`/reviews/${games.id}`} component={Review} />
                        <Link to={`/reviews/${games.id}`}><button className='review'>Review</button></Link>
                        <button onClick={() => removeGame(games.id)} className='clear'>Delete</button>
                        <Link to={`/games`}><button className='er'>Exit Review</button></Link>

                        <button className='er' onClick={this.handleClickCounter}>Like</button>

                        {/* <button className='er' handleButton={() => }>Like</button> */}
                    </div>
                </>
            </Router>
        )
    }
}




export default connect(null, { removeGame })(GameItem)



















// const GameItem = ({ game, removeGame }) => {
//     // console.log(game)
//     // debugger
//     return (
//         <Router>
//             <>
//                 <div className='box'>
//                     <h4>{game.id}: {game.title}</h4>
//                     <Route path={`/games/${game.id}`}>
//                         {game.info}
//                         <br />
//                         <Link to={`/games`}><button className='close'>Close</button></Link>
//                     </Route>


//                     <Route path={`/developers/${game.id}`}>
//                         <li className='fruit-header'>{game.developer}</li>
//                         <br />
//                         <Link to={`/games`}><button className='close'>Close</button></Link>
//                     </Route>


//                     <br />
//                     <Link to={`/games/${game.id}`}><button className='info'>info</button></Link>
//                     <Link to={`/developers/${game.id}`}><button className='fruits'>Developer</button></Link>


//                     <Route path={`/reviews/${game.id}`} component={Review} />
//                     <Link to={`/reviews/${game.id}`}><button className='review'>Review</button></Link>
//                     <button onClick={() => removeGame(game.id)} className='clear'>Delete</button>
//                     <Link to={`/games`}><button className='er'>Exit Review</button></Link>

//                     {/* <button className='er' onClick={this.handleClickCounter}Like></button> */}

//                     {/* <button className='er' handleButton={() => }>Like</button> */}
//                 </div>
//             </>
//         </Router>
//     )
// }