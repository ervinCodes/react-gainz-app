import React, {useState} from 'react'


const Signup = () => {
    //states for registration
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    //error states
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);

    //email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }

    //username change
    const handleUserName = (e) => {
        setUserName(e.target.value);
        setSubmitted(false);
    }

    //password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        setSubmitted(false);
    }

    //form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        let temp = []
        if(email === '' || userName === '' || password === '' || confirm === '') {
            temp = [...temp, 'Please fill in all fields']
        }else if(password !== confirm){
            temp = [...temp, 'Password fields do not match']
        } else {
            setSubmitted(true);
            setErrors([]);

            fetch('/signup', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    userName: userName,
                    password: password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(res => {
                    console.log('success')
                })
                .catch(err => console.error(err))

        }
        setErrors(temp)
    }

    return (
        <main className="h-full w-full md:m-auto text-white flex justify-center">
            <div className="h-full w-full flex justify-center items-center">
                <section className="mt-5 md:w-[600px] w-full px-2 md:px-0">
                    {errors.map((err,i) => {
                        return <span key="{i}" className="alert alert-danger">{err}</span>
                    })}
                    <form className="mt-4">
                        <div className="mb-3 flex flex-col">
                            <label htmlFor="userName" className="form-label">User Name</label>
                            <input onChange={handleUserName} type="text" className="form-control rounded p-1" id="userName" name="userName"></input>
                        </div>
                        <div className="mb-3 flex flex-col">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                            <input onChange={handleEmail} type="email" className="form-control rounded p-1" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"></input>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 flex flex-col">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={handlePassword} type="password" className="form-control rounded p-1" id="password" name="password"></input>
                        </div>
                        <div className="mb-3 flex flex-col">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control rounded p-1" onChange={handleConfirm} id="confirmPassword" name="confirmPassword"></input>
                        </div>
                        <button type="submit" className="p-2 bg-white text-black hover:text-white hover:bg-gray-700 rounded-lg" onClick={handleSubmit}>Submit</button>
                    </form>
                    
                </section>
            </div>
        </main>
    )
}

export default Signup