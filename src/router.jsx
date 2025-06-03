import { createBrowserRouter } from 'react-router'
import App from './App.jsx'
import ArtistPage from './Components/ArtistPageComponent/ArtistPage.jsx'
import ListsRenderComponent from './Components/ListsRenderComponent.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {index: true, Component: ListsRenderComponent},
      {path: '/artist/:name', Component: ArtistPage},
    ]
  }
])

export default router