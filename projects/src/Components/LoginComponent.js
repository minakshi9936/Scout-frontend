import React, { useState } from 'react';
import './LoginComponenet.css'; 

// const LoginComponent = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Please enter a valid email';
//     }

//     // Validate Password
    // if (!password) {
    //   newErrors.password = 'Password is required';
    // } else if (password.length < 6) {
    //   newErrors.password = 'Password must be at least 6 characters';
    // }

    // setErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) {
    //   console.log('Logging in with', { email, password });
    // }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />
//             {errors.email && <div className="error-message">{errors.email}</div>}
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//             />
//             {errors.password && <div className="error-message">{errors.password}</div>}
//           </div>

//           <button type="submit" className="login-btn">Login</button>
//         </form>
//         <p className="signup-link">
//           Don't have an account? <a href="/signup">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

const LoginComponent = () => {
  const [isLogin, setLogin] = useState(true)
  const [show, setShow] = useState(false)      //for password showhidepassword
  const [data, setData] = useState(undefined)
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});


  const options = [
      "Admin",
      "SalesManager",
      "Labour",
      "HR Department"
  ];

  
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newErrors = {};
        if(!email){
            newErrors.email = 'requied email'
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = "Please Enter a valid email"
        }
    
    if (!password) {
        newErrors.password = 'Password is required';
      } else if (password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        console.log('Logging in with', { email, password });
      }
    }


return (
  <div className='body1'>
  <div className='container'>
      <div className='welcome'>
      <h1>Welcome to Scout Tribes!</h1>
      </div>
      <div className='form-container'>
          <div className='form-toggle'>
              <button className={isLogin ? 'active' : ""} onClick={()=>setLogin(true)}>Login</button>
              <button className={!isLogin ? 'active' : ""} onClick={()=>setLogin(false)}>Signup</button>
          </div>
          {isLogin ? <>
          <div className='form'>
              <h2>Login Form</h2>
              <input type='email' value={email} placeholder='Email' 
              onChange={(e)=>setEmail(e.target.value)}/>
              {errors.email && <div className="error-message">{errors.email}</div>}

              <input type='Password' value={password} placeholder='Password'
              onChange={(e)=>setPassword(e.target.value)}/>
              {errors.password && <div className="error-message">{errors.password}</div>}

              <a href='#'>Forget Password?</a>
              <button onClick={handleSubmit}>Login</button>
              <p>Not a Member ? <a href='./signup' onClick={()=>setLogin(false)}>Signup now</a></p>
          </div>
          </> : <>
          <div className='form'>
              <h2>{data} Signup Form</h2>
              <div className='select-box'>
                  <select onClick={(e)=>setData(e.target.value)}>
                  <option>Please choose one</option>
                  {options.map((option, index)=>{
                      return (
                          <option key={index}>
                              {option}
                          </option>
                      )
                  })}
              </select>
              </div>
              <input type='text' placeholder='Name'></input>
              <div className='position-shift'>
              <input type='email' placeholder='Email' value={email}
               onChange={(e)=>setEmail(e.target.value)}/>
               {errors.password && <div className="error-message">{errors.email}</div>}
              </div>
              <div>
              <input type={show ? 'text' : 'password'} placeholder='Password' value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
              {errors.password && <div className="error-message">{errors.password}</div>}
              <div>
              <input type={show ? 'text' : 'password'} placeholder='confirm Password' />
              {errors.password && <div className="error-message">{errors.password}</div>}
              </div>
              <button onClick={()=>setShow(!show)}>{show ? "Hide" : 'Show'}</button>
              </div>
            
              
              <button className='submitbtn' onClick={handleSubmit}>Submit</button>
          </div>
          </>}
      </div>
  </div>
  </div>
)
}

export default LoginComponent;
