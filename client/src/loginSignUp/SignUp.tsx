import axios from "axios"
import { useState } from "react"

const SignUp = () => {
    const [name, SetName] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()        
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(res => {
            alert("Created")
        }).catch(err => console.log(err))
    }



  return (
    <div className="bg-blue-600 w-full h-screen">
        <div className="container mx-auto px-40 py-20">
            <div className="bg-white py-12 px-16 rounded">
                <h1 className="font-semibold text-3xl">SigmUp Here</h1>
                <hr className="mb-4"/>

                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label htmlFor="text-xl pb-8">Name</label>
                        <input type="text" className="w-full h-12 border rounded pl-4" placeholder="Name"
                        onChange={(e) => SetName(e.target.value)}/>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="text-xl pb-8">Email</label>
                        <input type="email" className="w-full h-12 border rounded pl-4" placeholder="Email" 
                        onChange={(e) => SetEmail(e.target.value)}/>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="text-xl pb-8">Password</label>
                        <input type="password" className="w-full h-12 border rounded pl-4" placeholder="Password" 
                        onChange={(e) => SetPassword(e.target.value)}/>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="w-full h-16 bg-green-600 text-xl text-white rounded duration-500 hover:bg-green-700">Sign Up</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default SignUp