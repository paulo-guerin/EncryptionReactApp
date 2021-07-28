import React from 'react'
// import './App.css'

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
    <div className="w-full h-screen max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
      <p class="text-center text-gray-500 text-xs">
        &copy;2021 Logo. All rights reserved.
      </p>
    </div>
  )
}

