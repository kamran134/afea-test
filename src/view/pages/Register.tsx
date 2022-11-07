import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../redux/reducers';
import { Action } from 'redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passconf, setPassConf] = useState<string>('');
    const dispatch: ThunkDispatch<RootState, void, Action<string>> = useDispatch();

    const { auth } = useSelector((state: RootState) => ({
        auth: state.auth
    }));

    const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const passconfChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassConf(e.target.value);
    }

    const submitButtonHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(register({username, password, passconf}));
    }

    useEffect(() => {
        localStorage.setItem("auth.token", auth.accessToken || '');
    }, [auth]);

    return (
        <div className='login-container'>
            <div className='login-container__header'>Registration</div>
            {!auth.accessToken ? 
            <div>
                <form className='login-container__form' onSubmit={submitButtonHandler}>
                    <input name='username' type={'text'} placeholder='Username' onChange={usernameChangeHandler} />
                    <input name='password' type={'password'} placeholder='Password' onChange={passwordChangeHandler} />
                    <input name='passconf' type={'password'} placeholder='Confirm the password' onChange={passconfChangeHandler} />
                    <button type={'submit'}>Register</button>
                </form>
            </div> : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div>Siz artıq qeydiyyatdan keçmisiniz</div>
                <div><button type={'button'}>Sistemdən çıxış</button></div>
                <div><Link to='/'>Əsas səhifəyə qayıt</Link></div>
            </div>}
        </div>
    );
}

export default Register;