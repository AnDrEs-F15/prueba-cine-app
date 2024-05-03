import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeApp from '../views/Home/HomeApp'
import MovieDetail from '../views/Movie/MovieDetail'

const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeApp />} />
                <Route path='/movie/:movie' element={<MovieDetail />} />
            </Routes>
        </>
    )
}

export default AppRoute