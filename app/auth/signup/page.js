'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/user/signup', {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        console.log('Signup successful! Token:', token);
        router.push('/auth')
      } else {
        console.error('Signup failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Failed to sign up');
    }
  };

  return (
    <div className='lg:h-screen w-full  bg-login-backCover flex justify-center items-center '>
      <div className='lg:w-[400px] sm:w-full md:w-[400px] w-full h-[525px] bg-white rounded-sm shadow-lg px-8'>
        <div className='py-4 text-[#0052CC] text-[34px] text-center font-bold tracking-wider'>SmartLead</div>
        <div className='py-4'>
          <p className='text-center mb-4 font-semibold'>Sign up to continue</p>
          <form onSubmit={handleSignUp}>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full py-2 mb-4 px-2 focus:outline-[#0065ff] border border-slate-400 rounded-sm'
              required
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full py-2 mb-4 px-2 focus:outline-[#0065ff] border border-slate-400 rounded-sm'
              required
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full py-2 mb-4 px-2 focus:outline-[#0065ff] border border-slate-400 rounded-sm'
              required
            />
            <p className='text-slate-800 mb-4 text-sm'>
              By signing up, I accept the SmartLead Terms of Service and acknowledge the Privacy Policy.
            </p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button
              type='submit'
              className='w-full font-semibold text-white bg-[#0052CC] mb-4 py-2 rounded-sm hover:bg-[#0065ff]'
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
