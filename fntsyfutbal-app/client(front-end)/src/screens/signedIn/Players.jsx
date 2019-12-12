import React from 'react'
import Layout from '../../components/shared/Layout'

export default function Players(props) {
    const { history, match, user, players } = props
    const renderButton = id => {
        if (user) {
            return (
                <button onClick={() => history.push(`${match.url}/${id}`)}>
                    See More
                </button>
            )
        } else {
            return null
        }
    }

    const renderPlayers = () => {
        if (players) {
            return players.map(player => {
                return (
                    <div className='player' key={player.id}>
                        <h3>{player.name}</h3>
                        <img src={player.imgUrl}/>
                        {renderButton(player.id)}
                    </div>
                )
            })
        } else {
            return null
        }
    }

    if (user) {
        return (
            <Layout>
                <h4>Players</h4>
                {!players ? <h3>No Players Currently.</h3> : null}
                <div className='player-container'>{renderPlayers()}</div>
            </Layout>
        )
    } else {
        return (
            <div className='landing'>
                <h2>Welcome to your fantasy futbal players</h2>
                <div className='main'>
                    {!players ? <h3>No Players Currently.</h3> : null}
                    <div className='player-container'>{renderPlayers()}</div>
                </div>
            </div>
        )
    }
}