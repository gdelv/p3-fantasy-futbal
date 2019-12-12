
// import React from 'react'
// import Layout from '../../components/shared/Layout'
// const Join = () => (
//     <Layout>
//         <h4>Current Roster:</h4>
//     </Layout>
// )


// export default Join

import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout'
import { getRosterById, deleteRoster } from '../../services/rosters'

class Roster extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roster: null,
            deleted: false
        }
    }

    async componentDidMount() {
        try {
            const roster = await getRosterById(this.props.match.params.id)
            this.setState({ roster })
        } catch (err) {
            console.error(err)
        }
    }

    destroy = () => {
        deleteRoster(this.state.roster)
            .then(() => this.setState({ deleted: true }))
            .catch(console.error)
    }

    render() {
        const { roster, deleted } = this.state

        if (!roster) {
            return <p>Loading...</p>
        }

        if (deleted) {
            return (
                <Redirect
                    to={{
                        pathname: '/rosters',
                        state: { msg: 'Roster succesfully deleted' }
                    }}
                />
            )
        }

        return (
            <Layout>
                <div className='roster'>
                    <Link to='/items'>
                        <span>Back to all rosters</span>
                    </Link>
                    <h4>{roster.title}</h4>
                    <div className='buttons'>
                        <button className='danger' onClick={this.destroy}>
                            Delete Roster
                        </button>
                        <button
                            className='edit'
                            onClick={() => 
                                this.props.history.push(
                                    `/rosters/${this.props.match.params.id}/edit`
                                )
                            }    
                        >
                            Edit Roster
                        </button>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Roster