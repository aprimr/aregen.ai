import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useState } from 'react';
import InputField from './components/InputField';

function App() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [inputField, setInputField] = useState('');
  const [data, setData] = useState([]);

  const handleInputField = (e) => {
    setQuestion(e.target.value);
    setInputField(e.target.value);
  };

  async function generateAnswer() {
    setInputField('Generating...');

    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_GEMINI_API}`,
      method: "post",
      data: {
        "contents": [{
          "parts": [{ "text": question }]
        }]
      },
    });

    const answer = response['data']['candidates'][0]['content']['parts'][0]['text'];

    const newEntry = { que: question, ans: answer };
    setData([...data, newEntry]);
    setResult(answer);
    setInputField('');
  };

  return (
    <Home>
      <Navbar />
      <div className='w-full px-2 mt-2 mb-20 pb-20'>
        {data.map((entry, index) => (
          <div key={index} className='mb-3'>
            {/* Question */}
            <div className='h-auto w-full mb-3 flex justify-end'>
              <div className='h-auto w-auto flex gap-2'>
                <div className='h-full w-full px-6 py-2 text-sm bg-green-300 rounded-3xl rounded-tr-lg'>
                  {entry.que}
                </div>
                <img src="../public/profile.svg" alt="logo" className='h-9 w-9 rounded-md' />
              </div>
            </div>
            {/* Answer */}
            <div className='h-auto w-full flex justify-start'>
              <div className='h-auto w-auto flex gap-2'>
                <img src="../public/aregGPT.png" alt="logo" className='h-9 w-9 rounded-md' />
                <div className='h-auto w-auto px-6 py-2 text-sm bg-slate-300 rounded-3xl rounded-tl-lg'>
                  {entry.ans}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <InputField generateAnswer={generateAnswer} handleInputField={handleInputField} value={inputField} />
    </Home>
  );
}

export default App;
