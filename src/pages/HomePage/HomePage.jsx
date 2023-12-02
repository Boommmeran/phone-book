import MainTitle from 'components/MainTitle';
import StyledSection from 'components/Section';
import { useAuth } from 'hooks';
import { HomeText, HomeLink } from './HomePage.styled';

export default function HomePage() {
  const { isLoggedIn } = useAuth();

  return (
    <StyledSection>
      <MainTitle>Phone book</MainTitle>
      <HomeText>Welcome to your personal phone book</HomeText>
      <HomeText> Here you can store and delete contacts anytime</HomeText>
      {!isLoggedIn && (
        <>
          <HomeText>
            To get started, please, <HomeLink to="/register">register</HomeLink>
          </HomeText>
          <HomeText>
            If you're already registered, just{' '}
            <HomeLink to="/login">log in</HomeLink>
          </HomeText>
        </>
      )}
    </StyledSection>
  );
}
