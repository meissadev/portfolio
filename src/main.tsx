import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './styles/globals.css'

/**
 * vite-react-ssg ajoute à chaque route un « loader » qui télécharge un fichier JSON
 * dont le nom change à chaque build. Le site n'utilise aucune donnée de loader :
 * on les retire, pour qu'un onglet ouvert pendant un redéploiement continue de
 * fonctionner au lieu de planter sur un fichier disparu.
 */
const withoutLoaders = (list: RouteObject[]): RouteObject[] =>
  list.map(
    (route) =>
      ({
        ...route,
        loader: undefined,
        children: route.children ? withoutLoaders(route.children) : undefined,
      }) as RouteObject,
  )

export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
  customCreateRouter: (routeList, opts) => createBrowserRouter(withoutLoaders(routeList), opts),
})
