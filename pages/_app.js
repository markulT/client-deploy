import '../styles/globals.css'
import {Provider, useDispatch, useSelector} from 'react-redux'
import {store, wrapper} from '../storage/store'
import Layout from "../comps/Layout";
import {getFullProfile, getProfile} from "../storage/reducers/authReducer";
import {useEffect} from "react";
import Router from "next/router";
import "modernizr";

function MyApp({Component, pageProps}) {
    const dispatch = useDispatch()
    const email= useSelector(state => state.authReducer.email)
    useEffect(()=>{
        if (!email) {
            console.log('loading profile...')
            dispatch(getProfile())
            dispatch(getFullProfile())
        }
    },[])
    return (
        <Layout>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Layout>
    )
}


export default wrapper.withRedux(MyApp)
