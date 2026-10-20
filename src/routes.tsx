import type { RouteRecord } from 'vite-react-ssg'
import Layout from './components/layout/Layout'
import { projects } from './data/projects'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProjectPage from './pages/ProjectPage'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'projets/:slug',
        element: <ProjectPage />,
        // Une page HTML pré-rendue par projet
        getStaticPaths: () => projects.map((p) => `projets/${p.slug}`),
      },
      // Pré-rendue en /404 puis copiée en 404.html (scripts/postbuild.ts)
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
