import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getProduct } from '../redux/actions';
import Axios from 'axios';

// import Header from '../components/Header';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default () => {
    const products = useSelector(state => state.products)
    const total = useSelector(state => state.total)
    const isOnline = useSelector(state => state.isOnline)

    const [alert, setAlert] = useState(false)

    const dispatch = useDispatch()

    useEffect(()=>{
        if (!isOnline) {
        Axios.get('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos')
        .then(list => {
            const productsList = list.data.map( el => {
                return {title: el.title, count: 0}
            })
            dispatch(getProduct(productsList))
        })
    }}
    ,[]) 
   
    return (
        <div className="pages">
            {alert && <Alert msg={alert}/>}
            {products.length ? 
            <div className="productList">
                {products.length && <Card products={products} changeAlert={{setAlert}}/>}
            </div> 
            :
            <div className="productList">
                <h1>mohon tunggu produk sedang dipersiapkan</h1>
            </div>
            }
        </div>
    )
}
