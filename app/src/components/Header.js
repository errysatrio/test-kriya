import React from 'react'
import { useHistory } from 'react-router-dom'

export default (props) => {
    const history = useHistory()

    return (
        <div className="header">
            <div>
                <h3 onClick={() => history.push('/')} className="home">HOME</h3>
            </div>
            <div className="right-header">
                <h2>{props.total}</h2>
                <i className="fas fa-shopping-cart icon" onClick={()=> history.push('/cart')}></i>
                {/* <button onClick={()=> history.push('/cart')}>view cart</button> */}
            </div>
        </div>
    )
}
