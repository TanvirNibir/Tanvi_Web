import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const useSignup = (setIsAuthenticated) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
    if(password2 === password){
      try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });


      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }

    } else{
      alert('Password does not match!');
    }

  };

  return {
    email,
    setEmail,
    password,
    password2,
    setPassword2,
    setPassword,
    handleSignup,
  };
};

export default useSignup;




//     const handleSignup = async () => {
//         try {
//         const response = await fetch("/api/user/signup", {
//             method: "POST",
//             headers: {
//             "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email, password }),
//         });

//             if(response.ok){
//                 const user = await response.json();
//                 localStorage.setItem('User', JSON.stringify(user));
//                 console.log('User signed up successfully!');
//                 serIsAuthenticiated(true);
//                 navigate('/');
//             } else{
//                 console.error('Signup failed!', response);
//             }
//         } catch(err){
//             console.err('Error during signup:', err);
//         }
//     };

//     return {
//         email,
//         setEmail,
//         password,
//         setPassword,
//         handleSignup
//     };
//     }

// export default useSignup;