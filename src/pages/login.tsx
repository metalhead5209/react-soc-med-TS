import {auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate  } from 'react-router-dom';

const login = () => {
  const navigate = useNavigate();

  const googleSignIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/')
  }

  return (
    <div>
      <h1>Sign in with Google</h1>
      <button onClick={googleSignIn}>Sign In</button>
    </div>
  );
};

export default login;
