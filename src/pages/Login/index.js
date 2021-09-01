import React from "react";
import Input from "@components/atoms/Input";
import Button from "@components/atoms/Button";
import { Link, useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../../confiq/redux/actions/user";
function Index({ setSocket }) {
  const dispatch = useDispatch();
  const router = useHistory();
  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const postLogin = (event) => {
    event.preventDefault();
    dispatch(login(data, router, setSocket));
  };
  return (
    <React.Fragment>
      <main className='auth-wrapper  flex flex--align-center flex--justify-center m-auto'>
        <section className='auth-wrapper__form width--100 border-radius--30 background--white'>
          <div className='width--100 m-auto'>
            <h3 className='text--center text--dark-blue'>Login</h3>
            <div className='flex flex--column'>
              <p className='text--light-black mt-5 mb-5'>Hi, Welcome back!</p>
              <div className='flex flex--column'>
                <label className='text--lighter-black' htmlFor='email'>
                  Email
                </label>
                <Input name='email' onChange={handleChange} className='pl-0' borderBottom id='email' />
              </div>
              <div className='flex mt-3 flex--column'>
                <label className='text--lighter-black' htmlFor='password'>
                  Password
                </label>
                <Input name='password' onChange={handleChange} className='pl-0' borderBottom id='password' password />
              </div>
              <div className='text--right mt-4 mb-4'>
                <Link className='text--dark-blue' to='/forgot-password'>
                  Forgot password?
                </Link>
              </div>
              <Button type='button' onClick={postLogin} size='large' className='border-radius--70'>
                Login
              </Button>
            </div>
            <div className='flex mt-4 mb-4'>
              <hr className='flex__item--5'></hr>
              <span className='text--lighter-black'>Login with</span>
              <hr className='flex__item--5'></hr>
            </div>
            <Button size='large' className='border-radius--70 mb-3' color='white' block>
              Google
            </Button>
            <p className='text--center mt-4'>
              Don’t have an account? <Link to='register'>Sign Up</Link>
            </p>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Index;
