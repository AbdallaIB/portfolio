import HomePage from '@pages/home';
import Page404 from '@pages/Page404';
import { PathRouteProps, Routes as Switch, Route } from 'react-router-dom';

export enum RouteType {
  PUBLIC,
  PRIVATE,
  RESTRICTED,
}
interface AppRoute extends PathRouteProps {
  type?: RouteType;
}
export const AppRoutes: AppRoute[] = [
  // Public Routes
  {
    type: RouteType.PUBLIC,
    path: '',
    children: <HomePage />,
  },
];

const Routes = () => {
  return (
    <Switch>
      {AppRoutes.map((r) => {
        return <Route key={`${r.path}`} path={`/${r.path}`} element={r.children} />;
      })}
      <Route path="*" element={<Page404 />} />
    </Switch>
  );
};

export default Routes;
