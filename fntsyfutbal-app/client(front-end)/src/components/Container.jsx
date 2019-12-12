import React, { Component } from 'react'
import Routes from '../routes' //incomplete
import Header from '../screens/Header' //complete

import { getRosters } from '../services/rosters' //(complete)
import { getPlayers } from '../services/players'  //(complete)


export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            rosters: [],
            players: []
        }
    }

    async componentDidMount() {
        try {
            const rosters = await getRosters()
            const players = await getPlayers()
            this.setState({ rosters })
            this.setState({ players })
        } catch(error) {
            console.error(error)
        }
    }

    addRoster =  roster => this.setState({ rosters: [...this.state.rosters, roster] })
    addPlayer =  player => this.setState({ players: [...this.state.players, player] })

    setUser = user => this.setState({ user })

    clearUser = () => this.setState({ user: null })

    render() {
        const { user, rosters, players } = this.state
        return (
            <>
                <Header user={user} />
                <main className='container'>
                    <Routes
                        rosters={rosters}
                        players={players}
                        user={user}
                        setUser={this.setUser}
                        addRoster={this.addRoster}
                        addPlayer={this.addPlayer}
                        clearUser={this.clearUser}
                    />
                </main>
            </>
        )
    }
}
