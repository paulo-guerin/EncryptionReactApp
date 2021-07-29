import React from 'react'
import './App.css'
// import logo from './logo.png';

export default function App() {
  // <div className="container">
  //   <h1 className="title">Application de cryptage</h1>
  //   <form className="form">
  //     <div className="formField">
  //       <label for="key">Clé de cryptage</label>
  //       <input type="text" name="key" id="key"/>
  //     </div>
  //     <div className="formField">
  //       <label for="message">Message</label>
  //       <textarea name="message"/>
  //     </div>
  //     <button type="submit" value="Submit">Crypter le message</button>
  //   </form>
  // </div>
  return (
    <div className="w-full h-screen flex justify-center flex-col">
      
      <div class="text-4xl text-blue-500 self-center mb-20">
        <img class="bg-auto bg-no-repeat bg-center h-48" src={'./images/logo.png'} alt='Entreprise Logo'/>
        <div class="text-lg text-black mb-4">Application de cryptage</div>
      </div>

      <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 self-center w-full flex flex-row content-around">
        <form className="colorApp shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-20 mr-20 w-10/12">
          <div className="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="key">
              Clé de cryptage
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="key" type="text" placeholder="Clé de cryptage"/>
          </div>
          <div className="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Message"/>
          </div>
          
          <div className="flex items-center content-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Crypter le message
            </button>
          </div>
        </form>
        <div className="colorApp w-10/12 text-gray-700 text-sm h-max flex flex-col font-bold content-around shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-20 mr-20">
          <div class="text-gray-700 text-sm font-bold">Clé cryptée:</div>
          <div class="text-gray-700 text-sm font-bold">Message cryptée:</div>
        </div>
      </div>
      <p class="text-center text-gray-500 text-xs">
        &copy;2021 Logo. All rights reserved.
      </p>
    </div>
  )
}

