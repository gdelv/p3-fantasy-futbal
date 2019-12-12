import React from 'react'
import Layout from '../../components/shared/Layout'

// import { createRoster } from '../../../../controllers/index'
// import { Input } from '../../components/shared/Input'

import { Button } from '../../components/shared/Button'
import { NavLink } from 'react-router-dom'

//moved this code to CreateRoster.jsx in order to use this component to render a single Roster by ID from CRUD
// class Roster extends Component {
//     constructor() {
//         super()
//         this.state = {
//             roster: {
//                 title: ""
//             },
//             createdRoster: null
//         }
//     }

//     handleChange = event => {
//         const updatedField = {
//             [event.target.name]: event.target.value
//         }
//         const editedRoster = Object.assign(this.state.roster, updatedField)
//         this.setState({
//             roster: editedRoster
//         })
//     }

//     handleSubmit = event => {
//         event.preventDefault()
//         this.props.addRoster(this.state.roster)
//             // createRoster(this.state.roster)
//             .then(res =>
//                 res.status === 201
//                     ? this.setState({
//                         createdRoster: res.data.roster
//                     })
//                     : null
//             )
//             .catch(console.error)
//     }

//     render() {
//         const { onChange, handleSubmit } = this
//         const { createdRoster, title } = this.state
//         console.log(this.state)
//         const { history } = this.props

//         if (createdRoster) {
//             return <Redirect to={`/`} />
//         }

//         return (
//             <Layout>
//                 <form name="Roster-Form">
//                     <input
//                         type="text"
//                         name='inputTitle'
//                         title='title'
//                         history={history}
//                         placeholder='Roster Title'
//                         handleChange= {this.handleChange()}
//                         handleSubmit={this.handleSubmit}
//                         cancelPath='/'
//                     />

//                     <NavLink to='addPlayers'>
//                         <Button title='Add Players' className='submitCreateRoster' />
//                     </NavLink>

//                 </form>
//             </Layout>
//         )
//     }
// }

const Roster = () => {
    return (
        <Layout>
            <h3>This is your current roster!</h3>
        </Layout>
    )
}
export default Roster