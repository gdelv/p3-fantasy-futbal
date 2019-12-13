import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import RosterForm from '../../components/shared/RosterForm'
import Layout from '../../components/shared/Layout'
import { createRoster } from '../../services/rosters'

class CreateRoster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roster: {
                title: "",
                player1: "",
                imgUrl1: "",
                player2: "",
                imgUrl2: "",
                player3: "",
                imgUrl3: "",
                player4: "",
                imgUrl4: "",
                player5: "",
                imgUrl5: "",
                player6: "",
                imgUrl6: "",
                player7: "",
                imgUrl7: "",
                player8: "",
                imgUrl8: "",
                player9: "",
                imgUrl9: "",
                player10: "",
                imgUrl10: "",
            },
            createdRoster: null
        }
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            roster: { ...prevState.roster, [name]: value }

        }))
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addRoster(this.state.roster)
        createRoster(this.state.roster)
            .then(res =>
                res.status === 201
                    ? this.setState({ createdRoster: res.data.roster })
                    : null
            )
            .catch(console.error)
    }

    render() {
        console.log(this.state)
        const { handleChange, handleSubmit } = this
        const { createdRoster, roster } = this.state
        // console.log(this.state)
        const { history } = this.props

        if (createdRoster) {
            return <Redirect to={`/`} />
        }

        return (
            <Layout>
                <RosterForm
                    roster={roster}
                    history={history}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    cancelPath="/"
                />
            </Layout>
        )

    }
}


export default CreateRoster