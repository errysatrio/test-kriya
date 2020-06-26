import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { checkout } from '../redux/actions';

import Header from '../components/Header';
import Card from '../components/Card'
import Alert from '../components/Alert'

export default () => {
    const total = useSelector(state => state.total)
    const cart = useSelector(state => state.cart)
    // const state = useSelector(state => state)

    const [alert, setAlert] = useState(false)

    const dispatch = useDispatch()

    const clearAll = () => {
        setAlert("sukses membeli produk")
        dispatch(checkout())
        setInterval(() => {
            setAlert(false)
        }, 2000);
    }
    return (
        <div className="pages">
            <Header total={total} />
            {alert && <Alert msg={alert}/>}
            <h1>CART</h1>
            <button onClick={clearAll}>checkout</button>
            <div className="productList">
                { cart.length ? 
                <>
                <Card products={cart}changeAlert={{setAlert}}/>
                </>
                :
                <h3> keranjang belanja kosong, silahkan pilih produk di home </h3>
            }
            </div>
        </div>
    )
}
