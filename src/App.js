import React from 'react';
// import './App.css';
import './assets/main.css'
// import Signup from './components/signup'

function App() {
  return (
<div class = "h-screen flex ">
      <form class="container.md my- xl:mx-64 sm:mx-2 md:mx-6 bg-while-900 rounded px-10 grid gap-5 self-center flex-1">
        <div className="flex justify-between">
          <div class="border-b border-b-2 border-teal-500 w-2/5">
            <label htmlFor="dob" class=".font-sans text-center">Date of Birth</label> <br />
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  focus:outline-none" type="date" />
          </div>

          <div class="border-b border-b-2 border-teal-500 w-2/5">
            <label htmlFor="gender">Gender</label> <br />
            <div className="relative">
              <select name="" id="grid-state" className="block appearance-none w-full mt-2 border-none border focus:outline-none">
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-b-2 border-teal-500 w-full">
          <label htmlFor="city">City,State</label> <br />
          <div className="relative">
            <select name="" id="" class="block appearance-none w-full border-none border focus:outline-none mt-2" id="grid-state">
              <option value="">Bangalore</option>
              <option value="">Mumbai</option>
              <option value="">Delhi</option>
              <option value="">Hyderabad</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>

        <div className="border-b border-b-2 border-teal-500 w-full">
          <label htmlFor="username" >Higin Username</label> <br />
          <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 focus:outline-none" type="text" placeholder="username" />
        </div>

        <div className="border-b border-b-2 border-teal-500  w-full">
          <label htmlFor="email">Email</label> <br />
          <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 focus:outline-none" type="email" placeholder='example12@gmail.com' />
        </div>
        <div class="flex justify-between">
          <div className="border-b border-b-2 border-teal-500 w-2/5">
            <label htmlFor="password" >Password</label> <br />
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 focus:outline-none" type="password" placeholder='***********' />
          </div>


          <div className="border-b border-b-2 border-teal-500 w-2/5">
            <label htmlFor="password">Confirm Password</label> <br />
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 focus:outline-none" type="password" placeholder='***********' />
          </div>
        </div>
        <center>
          <button class=" bg-gray-800 hover:bg-gray-900  text-white font-bold py-2 px-4 rounded-full xl:w-1/4 sm:w-1/2 " type="button" >Sign up</button>
        </center>
      </form>
    </div>
  );
}

export default App;
