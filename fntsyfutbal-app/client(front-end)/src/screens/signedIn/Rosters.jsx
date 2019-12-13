import React from 'react'
import Layout from '../../components/shared/Layout'

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

                        <p>{roster.player1}</p>
                        <img src={roster.imgUrl1} key={roster.id}/>

                        <p>{roster.player2}</p>
                        <img src={roster.imgUrl2} key={roster.id}/>

                        <p>{roster.player3}</p>
                        <img src={roster.imgUrl3} key={roster.id}/>

                        <p>{roster.player4}</p>
                        <img src={roster.imgUrl4} key={roster.id}/>

                        <p>{roster.player5}</p>
                        <img src={roster.imgUrl5} key={roster.id}/>

                        <p>{roster.player6}</p>
                        <img src={roster.imgUrl6} key={roster.id}/>

                        <p>{roster.player7}</p>
                        <img src={roster.imgUrl7} key={roster.id}/>

                        <p>{roster.player8}</p>
                        <img src={roster.imgUrl8} key={roster.id}/>

                        <p>{roster.player9}</p>
                        <img src={roster.imgUrl9} key={roster.id}/>

                        <p>{roster.player10}</p>
                        <img src={roster.imgUrl10} key={roster.id}/>


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
                <h2>Welcome to your fantasy futbal rosters</h2>
                <div className='main'>
                    {!rosters ? <h3>No Rosters Currently.</h3> : null}
                    <div className='roster-container'>{renderRosters()}</div>
                </div>
            </div>
        )
    }
}
