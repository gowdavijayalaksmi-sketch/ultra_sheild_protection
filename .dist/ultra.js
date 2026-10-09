import { useState } from "react";

export default function Chat() {
  const [msgs, setMsgs] = useState([
    { from: "bot", text: "Hey Viji, gentleman mode on 🤝" }
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMsgs([...msgs, { from: "you", text: input }]);
    setInput("");
    // here call your backend API
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-[#111b21]">
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.from==='you' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-3 py-2 rounded-xl text-sm ${m.from==='you' ? 'bg-[#005c4b] text-white' : 'bg-[#202c33] text-white'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex p-2 gap-2 bg-[#202c33]">
        <input 
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==='Enter' && send()}
          placeholder="Type a message"
          className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-white outline-none"
        />
        <button onClick={send} className="bg-[#00a884] px-5 rounded-full text-white">Send</button>
      </div>
    </div>
  );
}