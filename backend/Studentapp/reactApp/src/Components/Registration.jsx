import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
function Registration() {
    async function sendData(e){
     e.preventDefault();
     const name=e.target.name.value;
     const email=e.target.email.value;
     const password=e.target.password.value;
     //alert(name+email+password);

        const response=await fetch("http://localhost:3005/register",{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{'Content-Type':'application/json'}
        })
        const res=await response.json();
        alert(res.msg);
    }
  return (



    <div class="flex justify-center items-center h-screen bg-blue-50">
    <div class="w-96 p-6 rounded-lg bg-white shadow-lg">
        <h2 class="text-center text-white bg-gradient-to-r from-cyan-400 to-blue-500 py-3 rounded-md text-lg font-semibold">Registration</h2>
        <form onSubmit={sendData} class="mt-4">
            <div class="mb-4">
                <label for="exampleInputname" class="font-semibold text-gray-700">Name</label>
                <input type="text" name="name" required id="exampleInputname" placeholder="Enter name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div class="mb-4">
                <label for="exampleInputEmail1" class="font-semibold text-gray-700">Email address</label>
                <input type="email" name="email" required id="exampleInputEmail1" placeholder="Enter email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                <small id="emailHelp" class="text-gray-500 block mt-1">We'll never share your email with anyone else.</small>
            </div>
            <div class="mb-4">
                <label for="exampleInputPassword1" class="font-semibold text-gray-700">Password</label>
                <input type="password" name="password" required id="exampleInputPassword1" placeholder="Password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <button type="submit" class="w-full py-2 bg-cyan-400 text-white font-semibold rounded-md hover:bg-cyan-500 transition duration-200">Submit</button>
        </form>
    </div>
</div>

  )
}

export default Registration