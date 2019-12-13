import React from 'react'
import Layout from '../../components/shared/Layout'
import herosoccer from '../images/herosoccer.jpg'
import g from '../images/giphy-3.gif'
import Button from '../../components/shared/Button'
import { NavLink } from 'react-router-dom'

export default function Rosters(props) {
    const { history, match, user, rosters } = props
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

    const renderRosters = () => {
        if (rosters) {
            return rosters.map(roster => {
                return (
                    <div className='roster' key={roster.id}>
                        <h3>{roster.title}</h3>
                        {renderButton(roster.id)}
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
                <h4>Rosters</h4>
                {!rosters ? <h3>No Rosters Currently.</h3> : null}
                <div className='roster-container'>{renderRosters()}</div>
            </Layout>
        )
    } else {
        return (
            <Layout>
                <div className="hero">
                    <img src={herosoccer} alt="" />

                </div>
                <div className='landing'>
                    <h1>Welcome to your Fantasy Futball</h1>
                    <div className="giphy">
                        <img src={g} alt="" />

                        <h4>Think you got what it takes to win on the big stage?
                            Create your Roster and work your way to the top by
                            beating the best of the best.
                            Select players from all competitions to create the most
                            most dominant in Futball history.
        </h4>
                    </div>
                    <div className='main'>
                        {!rosters ? <h3>No Rosters Currently. Sign in or create an account to begin!</h3> : null}
                        <div className='roster-container'>{renderRosters()}</div>
                    </div>
                </div>

                <NavLink to='join'>
                    <Button title='Create Account' className='create-button' />
                </NavLink>

                <NavLink to='login' className='sign-in'>
                    Sign in
        </NavLink>


            </Layout>
        )
    }
}
