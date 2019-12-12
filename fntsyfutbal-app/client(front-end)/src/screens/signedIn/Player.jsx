import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout'
import { getPlayerById, deletePlayer } from '../../services/players'

class Player extends Component {
    constructor(props) {
        super(props)

        this.state = {
            player: null,
            deleted: false
        }
    }

    async componentDidMount() {
        try {
            const player = await getPlayerById(this.props.match.params.id)
            this.setState({ player })
        } catch (err) {
            console.error(err)
        }
    }

    destroy = () => {
        deletePlayer(this.state.player)
            .then(() => this.setState({ deleted: true }))
            .catch(console.error)
    }

    render() {
        const { player, deleted } = this.state

        if (!player) {
            return <p>Loading...</p>
        }

        if (deleted) {
            return (
                <Redirect
                    to={{
                        pathname: '/players',
                        state: { msg: 'Player succesfully deleted' }
                    }}
                />
            )
        }

        return (
            <Layout>
                <div className='player'>
                    <Link to='/items'>
                        <span>Back to all players</span>
                    </Link>
                    <h4>{player.name}</h4>
                    <div className='buttons'>
                        <button className='danger' onClick={this.destroy}>
                            Delete Player
                        </button>
                        <button
                            className='edit'
                            onClick={() => 
                                this.props.history.push(
                                    `/players/${this.props.match.params.id}/edit`
                                )
                            }    
                        >
                            Edit Player
                        </button>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Player