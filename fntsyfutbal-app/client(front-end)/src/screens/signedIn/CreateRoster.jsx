import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import RosterForm from '../../components/shared/RosterForm'
import Layout from '../../components/shared/Layout'
// import { Button } from '../../components/shared/Button'
// import { NavLink } from 'react-router-dom'
import { createRoster } from '../../services/rosters'
import CreatePlayers from './CreatePlayers'

class CreateRoster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roster: {
                title: "",
                // link: ""
            },
            createdRoster: null
        }
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            roster: {
                [name]: value
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addRoster(this.state.roster)
        createRoster(this.state.roster)
            .then(res =>
                res.status === 201
                    ? this.setState({ createdRoster: res.data.roster})
                    : null
            )
            .catch(console.error)
    }

    render() {
        const { handleChange, handleSubmit } = this
        const { createdRoster, roster } = this.state
        // console.log(this.state)
        const { history } = this.props

        if (createdRoster) {
            return <Redirect to={`/`} />
        }

        // return (
        //     <Layout>
        //         <form name="Roster-Form">
        //             <input
        //                 type="text"
        //                 name='inputTitle'
        //                 title={this.title.state}
        //                 history={history}
        //                 placeholder='Roster Title'
        //                 onChange={handleChange()}
        //                 handleSubmit={handleSubmit}
        //                 cancelPath='/'
        //             />

        //             <NavLink to='addPlayers'>
        //                 <Button title='Add Players' className='submitCreateRoster' />
        //             </NavLink>

        //         </form>
        //     </Layout>
        // )
        return (
            <Layout>
              <RosterForm
                roster={roster}
                history={history}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                cancelPath="/"
              />
              <CreatePlayers/>
            </Layout>
          )

    }
}


export default CreateRoster