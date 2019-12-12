import React, {Component} from 'react'
import Redirect from 'react-router-dom'
import {getPlayerById, updatePlayer} from '../../services/players'

class EditPlayers extends Component {
    constructor(props){
        super(props)
        
        this.State = {
            player: {
                title: '',
                link: ''
            },
            updated: false
        }
    }

    async componentDidMount() {
        try {
            const player = await getPlayerById(this.props.match.params.id)
            this.setState({
                player
            })
        } 
        catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        event.preventDefault()

        updatePlayer(this.props.match.params.id)
        .then(() => this.setState({
            updated: true
        }))
        .catch(console.error)
    }

    render() {
        const {player, updated} = this.state
        const{handleChange, handleSubmit} = this

        if(updated) {
            return <Redirect to={`/players/${this.props.match.params.id}`}/>
        }

        return (
          <Layout>
                <form name="Player-Form">
                    <p>First Forward</p>
                    <input
                        type="text"
                        name='Forward1'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Second Forward</p>
                    <input
                        type="text"
                        name='Forward2'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>First Midfielder</p>
                    <input
                        type="text"
                        name='Midfield1'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Second Midfielder</p>
                    <input
                        type="text"
                        name='Midfield2'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Third Midfielder</p>
                    <input
                        type="text"
                        name='Midfield3'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Fourth Midfielder</p>
                    <input
                        type="text"
                        name='Midfield4'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>First Defender</p>
                    <input
                        type="text"
                        name='Defender1'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Second Defender</p>
                    <input
                        type="text"
                        name='Defender2'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Third Defender</p>
                    <input
                        type="text"
                        name='Defender3'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Fourth Defender</p>
                    <input
                        type="text"
                        name='Defender4'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />
                    <p>Goalie</p>
                    <input
                        type="text"
                        name='Goalie'
                        title={this.title.state}
                        history={history}
                        placeholder='Roster Title'
                        onChange={this.handleChange()}
                        handleSubmit={this.handleSubmit}
                        cancelPath='/'
                    />

                    <NavLink to='addPlayers'>
                        <Button title='Add Players' className='submitCreateRoster' />
                    </NavLink>

                </form>
            </Layout>
        )
    }
}

export default EditPlayers