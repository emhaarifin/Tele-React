import React from 'react';
import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';

import { useDispatch } from 'react-redux';
import { register } from '../../confiq/redux/actions/user';
import { useHistory } from 'react-router-dom';
function Index() {
  const router = useHistory();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const [data, setData] = React.useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
  });
  const postRegister = (event) => {
    event.preventDefault();
    dispatch(register(data, router));
  };
  return (
    <React.Fragment>
      <main className="auth-wrapper  flex flex--align-center flex--justify-center m-auto">
        <section className="auth-wrapper__form width--100 border-radius--30 background--white">
          <div className="width--100 m-auto">
            <div className="flex flex--align-center">
              <svg
                onClick={() => {
                  return router.push('/login');
                }}
                className="cursor--pointer"
                width="11"
                height="19"
                viewBox="0 0 11 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.20711 9.3271L9.22925 3.30496C9.24226 3.29283 9.2551 3.28044 9.26777 3.26777L9.97487 2.56066C10.5607 1.97487 10.5607 1.02513 9.97487 0.43934C9.38909 -0.146447 8.43934 -0.146447 7.85355 0.43934L7.52579 0.767105L7.52513 0.766442L0.732233 7.55933C-0.244077 8.53564 -0.244079 10.1186 0.732233 11.0949L7.14646 17.5091L7.52513 17.8878L7.85357 18.2162C8.43936 18.802 9.3891 18.802 9.97489 18.2162C10.5607 17.6304 10.5607 16.6807 9.97489 16.0949L9.64645 15.7664L9.26778 15.3878C9.26635 15.3863 9.2649 15.3849 9.26346 15.3835L3.20711 9.3271Z"
                  fill="#7E98DF"
                />
              </svg>
              <h3 className="ml-auto mr-auto m-0 text--dark-blue">Register</h3>
            </div>
            <div className="flex flex--column">
              <p className="text--light-black mt-5 mb-5">Let’s create your account!</p>
              <div className="flex mb-3  flex--column">
                <label className="text--lighter-black" htmlFor="name">
                  Name
                </label>
                <Input name="fullname" onChange={handleChange} className="pl-0" borderBottom id="name" />
              </div>
              <div className="flex mb-3  flex--column">
                <label className="text--lighter-black" htmlFor="username">
                  Username
                </label>
                <Input name="username" onChange={handleChange} className="pl-0" borderBottom id="username" />
              </div>
              <div className="flex mb-3  flex--column">
                <label className="text--lighter-black" htmlFor="email">
                  Email
                </label>
                <Input name="email" onChange={handleChange} className="pl-0" borderBottom id="email" />
              </div>
              <div className="flex mb-5  flex--column">
                <label className="text--lighter-black" htmlFor="password">
                  Password
                </label>
                <Input name="password" onChange={handleChange} className="pl-0" borderBottom id="password" password />
              </div>
              <Button onClick={postRegister} size="large" className="border-radius--70">
                Register
              </Button>
            </div>
            <div className="flex mt-4 mb-4">
              <hr className="flex__item--5"></hr>
              <span className="text--lighter-black">Register with</span>
              <hr className="flex__item--5"></hr>
            </div>
            <Button size="large" className="border-radius--70 mb-3" color="white" block>
              Google
            </Button>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Index;
