import HomePg from './Home'
import ProjectPg from './Project'

const routes = [
	{
		path: "/",
		exact: true,
		component: HomePg
	}, {
		path: '/proj',
		component: ProjectPg
	}
]

export default routes
