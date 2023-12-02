import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar';
import Loader from 'components/Loader';
import { Container, Header } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Header>
        <Container>
          <AppBar />
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
