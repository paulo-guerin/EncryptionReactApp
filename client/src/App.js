import './App.css'
import React, { useState, useEffect } from 'react';
var CryptoJS = require("crypto-js");

export default function App() {

  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [hash, setHash] = useState("MD5");

  const inputHandler = event => {
    setResult(event.target.value);
  }

  const copy = async () => {
    await navigator.clipboard.writeText(result);
    alert('Text copied');
  }

  const handleSubmitEncrypt = () => {
    switch (hash) {
      case 'DES':
        setResult(CryptoJS.DES.encrypt(message, key).toString());
        break;
      case 'AES':
        setResult(CryptoJS.AES.encrypt(message, key));
        break;
      case "TripleDES":
        setResult(CryptoJS.TripleDES.encrypt(message, key).toString());
        break;
      default:
        break;
    }
    // var decrypted = CryptoJS.SHA256.decrypt(encrypted, "Secret Passphrase");
  }

  const handleSubmitDecrypt = () => {
    switch (hash) {
      case 'DES':
        setResult((CryptoJS.DES.decrypt(message, key).toString(CryptoJS.enc.Utf8)));
        break;
      case 'AES':
        setResult((CryptoJS.AES.decrypt(message, key).toString(CryptoJS.enc.Utf8)));
        break;
      case "TripleDES":
        setResult((CryptoJS.TripleDES.decrypt(message, key).toString(CryptoJS.enc.Utf8)));
        break;
      default:
        break;
    }
    // var decrypted = CryptoJS.SHA256.decrypt(encrypted, "Secret Passphrase");
  }


  return (
    <div className="w-full h-screen flex justify-center flex-col">
      
      <div className="text-4xl text-blue-500 self-center mb-2">
        <img className="bg-auto bg-no-repeat bg-center h-48" src={'./images/logo.png'} alt='Entreprise Logo'/>
        <div className="text-lg text-black mb-4">Application de cryptage</div>
      </div>

      <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 self-center w-full flex flex-row content-around">
        <form className="colorApp shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-20 mr-20 w-10/12">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="key">
              Clé de cryptage
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="key" type="text" placeholder="Clé de cryptage" value={key} onChange={e => setKey(e.target.value)}/>
          </div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hash">
            Type de cryptage
          </label>
          <select name="hash" id="hash" onChange={e => setHash(e.target.value)}>
              <option value="AES">AES</option>
              <option value="DES">DES</option>
              <option value="TripleDES">TripleDES</option>
          </select>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}/>
          </div>
          
          <div className="flex items-center content-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(e) => handleSubmitEncrypt()}>
              Crypter le message
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(e) => handleSubmitDecrypt()}>
              Décrypter le message
            </button>
          </div>
        </form>
        <div className="colorApp w-10/12 text-gray-700 text-sm h-max flex flex-col font-bold content-around shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-20 mr-20">
          <div className="text-gray-700 text-sm font-bold">Message crypté:</div>
          <input className="shadow mb-20 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={result} onChange={inputHandler} />
          <button onClick={copy} disabled={!result} className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" 
          // onClick={(e) => handleSubmitEncrypt()}
          >
            Copier le message
          </button>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;2021 Logo. All rights reserved.
      </p>
    </div>
  )
}

