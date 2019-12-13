import React from 'react'
import Layout from '../../components/shared/Layout'
import herosoccer from '../images/herosoccer.jpg'
import giphy from '../images/giphy-3.gif'

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
            <div className='landing'>
                <img src={herosoccer} alt='' />
                <h2>Welcome to your fantasy futbal rosters</h2>
                <div className='giphy'>
                <img src={giphy} alt='' />
                </div>
                
                <div className='main'>
                    {!rosters ? <h3>No Rosters Currently.</h3> : null}
                    <div className='roster-container'>{renderRosters()}</div>
                </div>
            </div>
        )
    }
}
