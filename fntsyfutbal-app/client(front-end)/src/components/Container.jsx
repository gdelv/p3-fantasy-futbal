import React, { Component } from 'react'
import Routes from '../routes'
import Header from '../screens/Header'

import { getRosters } from '../services/rosters' 


export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            rosters: [],
        }
    }

    async componentDidMount() {
        try {
            const rosters = await getRosters()
            this.setState({ rosters })

        } catch(error) {
            console.error(error)
        }
    }

    addRoster =  roster => this.setState({ rosters: [...this.state.rosters, roster] })

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
                        user={user}
                        setUser={this.setUser}
                        addRoster={this.addRoster}
                        clearUser={this.clearUser}
                    />
                </main>
            </>
        )
    }
}
