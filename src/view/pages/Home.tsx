import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const Home: React.FC = () => {
  const { auth } = useSelector((state: RootState) => ({
    auth: state.auth
  }));

  return (
    <>
      <div>Home</div>
      {!auth.accessToken ? <div>
        Siz sistemdə qeydiyyatdan keçməmisiniz
      </div> : <div>
        Post əlavə edin
      </div>}
    </>
    
  );
}

export default Home;