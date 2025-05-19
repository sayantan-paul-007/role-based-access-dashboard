'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // credentials: 'include',
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Logged in as ${data.user?.role || 'Unknown Role'}`);
        router.push('/dashboard');
        
      } else {
        alert(data.error || 'Something went wrong');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        value={form.username}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={form.password}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}


// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function LoginForm() {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const res = await fetch('/api/login', {
//       method: 'POST',
//        headers: {
//           'Content-Type': 'application/json',
//         },
//       body: JSON.stringify({ username, password }),
//        credentials: 'include',
//     });

//     const data = await res.json();

//     if (res.ok) {
//       alert(`Logged in as ${data.role}`);
//       router.push('/dashboard');
//     } else {
//       setError(data.error || 'Login failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//         className="border"
//       />
//       <input
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         type="password"
//         placeholder="Password"
//         className="border"
//       />
//       <button type="submit">Login</button>
//       {error && <p className="text-red-500">{error}</p>}
//     </form>
//   );
// }

// 'use client'
// import { Eye, EyeOff } from "lucide-react";
// import { useState } from "react";

// export default function LoginForm(){
// const [showPassword, setShowPassword] = useState(false)
//  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
//     return(
//         <form action="/dashboard" className="rounded-xl bg-foreground dark:bg-dark-foreground border border-gray-300 dark:border-gray-500 flex flex-col px-8 py-12 w-[450px] gap-8">
//             <h4 className="font-bold text-2xl text-center">Login</h4>
//             <div className="flex flex-col gap-2">
//             <label htmlFor="username">Username</label>
//             <input type="text" name="username" id="username" className="rounded-md bg-gray-100 dark:bg-gray-700 p-2 w-full" />
//             </div>
//             <div className="flex flex-col gap-2">
//             <label htmlFor="password">Password</label>
//             <div className="relative flex items-center">
//             <input type={showPassword?"text":'password'} name="password" id="password" className="w-full rounded-md bg-gray-100 dark:bg-gray-700 py-2 pl-3 pr-12" />
//             <button type="button" className="absolute right-1 mr-1  p-1 rounded-md" onClick={togglePasswordVisibility}>
//                {
//                 showPassword?(<Eye size={20} />): (<EyeOff size={20} />)
//                }
                
               
//             </button>
//             </div>
           
//            </div>
            
//             <input type="submit" className="bg-accent py-4 mt-4 rounded-lg cursor-pointer text-lg text-white"/>
//         </form>
//     )
// }