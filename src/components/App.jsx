import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
i

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));
const NotFound = lazy(() => import('../components/NotFound/NotFound'));

export const App = () => {
  return (
    <Container>
        <Header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Tweets</Link>
              </li>
            </ul>
          </nav>
        </Header>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
  );
};
