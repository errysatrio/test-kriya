import React from 'react'
import { useDispatch } from 'react-redux'
import { min, plus } from '../redux/actions'

export default (props) => {
    const dispatch = useDispatch()

    const add = (title, index) =>{
        props.changeAlert.setAlert('sukses menambah produk')
        dispatch(plus(title, index))
        setInterval(() => {props.changeAlert.setAlert(false)}, 1000);
    }

    const reduce = (title, index) =>{
        props.changeAlert.setAlert('sukses mengurangi produk')
        dispatch(min(title, index))
        setInterval(() => {props.changeAlert.setAlert(false)}, 1000);
    }

    return (
        <div className="mainPage">
            <div className="card-container">
                {props.products.map((el, index) => (
                    <div className="card" key={index}>
                        <h1>{el.title}</h1>
                        <div className="amount">
                            <button style={el.count === 0 ? {"visibility": "hidden"} : null} onClick={() => reduce(el.title, index)}>-</button>
                            <p>{el.count}</p>
                            <button onClick={() => add(el.title, index)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
