import './App.css'
import React, { useState } from 'react';
var CryptoJS = require("crypto-js");

export default function App() {

  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [hash, setHash] = useState("AES");
  const [email, setEmail] = useState("");

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
        setResult(CryptoJS.AES.encrypt(message, key).toString());
        break;
      case "TripleDES":
        setResult(CryptoJS.TripleDES.encrypt(message, key).toString());
        break;
      default:
        break;
    }
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
  }


  return (
    <div className="w-full h-screen flex justify-center flex-col space-y-10">
      
      <div className="text-4xl border-4 border-light-blue-500 text-blue-500 flex flex-row justify-center content-around w-full mb-2">
        <img className="bg-auto bg-no-repeat bg-center h-28" src={'./images/logo.png'} alt='Entreprise Logo'/>
        <div className="self-center text-black mb-4 ml-20">Application de cryptage</div>
      </div>

      <div className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 self-center w-full flex flex-row content-around">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-20 mr-20 w-10/12">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="key">
              Clé de cryptage
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="key" type="text" placeholder="Clé de cryptage" value={key} onChange={e => setKey(e.target.value)}/>
          </div>
          <div className="flex flex-row">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hash">
              Type de cryptage
            </label>
            <select className="ml-10" name="hash" id="hash" onChange={e => setHash(e.target.value)}>
                <option value="AES">AES</option>
                <option value="DES">DES</option>
                <option value="TripleDES">TripleDES</option>
            </select>
          </div>
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
            <button className="bg-red-500 hover:bg-red-700 ml-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(e) => handleSubmitDecrypt()}>
              Décrypter le message
            </button>
          </div>
        </form>
        <div className="bg-white w-10/12 text-gray-700 text-sm h-max flex flex-col font-bold content-around shadow-md rounded px-8 pt-6 pb-8 mb-4 ml-20 mr-20">
          <div className="text-gray-700 text-sm font-bold">Message crypté/décrypté:</div>
          <input className="shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={result} onChange={inputHandler} />
          <button onClick={copy} disabled={!result} className="mb-10 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Copier le message
          </button>

          <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Une fois votre message crypté, vous pouvez l'envoyer au destinataire de votre choix!
          </label>
          <input className="shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Entrez le mail du destinataire" value={email} onChange={e => setEmail(e.target.value)}/>
          <button onClick={() => window.open(`mailto:${email}?subject=subject&body=${result}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Envoyer
          </button>
        </div>
      </div>
      <p className="colorApp text-center text-gray-500 text-xs">
        &copy;2021 Logo. All rights reserved.
      </p>
    </div>
  )
}

