import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'

const Router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
], {
    basename: "https://henriquedantas20.github.io/tetrix"
})

export default Router