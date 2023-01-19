import axios from "axios";
import React, { useState } from "react";
import nc from "next-connect";
import cors from "cors";

const control = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  

   


  const submitLogin = (e)=> {
    
    e.preventDefault();
    const data = {
      username: username,
      password: password
    }
    axios.get("http://localhost:8080/php_work/login.php", {
      
      withCredentials: true,  
      crossorigin: true,  
      mode: 'no-cors',  
      data: data,
      headers: [
        { key: "Access-Control-Allow-Credentials", value: "true" },
        { key: "Access-Control-Allow-Origin", value: "*" },
        { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
        { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
      ]
    })
  }
  return (
    <section class="h-screen">
      <div class="container px-6 py-12 h-full">
        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="w-full"
              alt="Phone image"
            />
          </div>
          <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form>
              <h1 className=" font-bold text-xl mb-9 text-center">Admin</h1>
              <div class="mb-6">
                <input
                  type="text"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Username"
                />
              </div>

              <div class="mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div class="flex justify-between items-center mb-6">
                
                <a
                  href="#!"
                  class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                onClick={submitLogin}
                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button> 
             
             

             
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default control;
