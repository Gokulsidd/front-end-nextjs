'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const PasswordReset = () => {
//   const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tokenValid, setTokenValid] = useState(false); // State to track token validity

//   useEffect(() => {
//     // Perform token validation here (optional)
//     const token = router.query.token; // Get token from query parameters

//     // Example of token validation logic (replace with your implementation)
//     // This is a simplified example, actual validation may involve an API call to your backend
//     if (token === 'validToken') {
//       setTokenValid(true); // Set token validity state to true
//     } else {
//       setTokenValid(false); // Set token validity state to false
//       // Redirect or handle invalid token scenario
//     }
//   }, [router.query.token]);

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    // Implement password reset logic here
    console.log('New Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Reset form fields after password reset
    setPassword('');
    setConfirmPassword('');
  };

//   if (!tokenValid) {
//     return <div>Invalid or expired token. Please request a new password reset.</div>;
//   }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset Password</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handlePasswordReset}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">
                New Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
