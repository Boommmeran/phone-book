import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderContainer>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#007bff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </LoaderContainer>
  );
};
