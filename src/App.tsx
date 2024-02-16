import QRCode from "react-qr-code";
import { useState } from "react";

function App() {
  const [qrText, setQrText] = useState<string | null>(null);
  const handleChange = (e: React.BaseSyntheticEvent) => {
    setQrText(e.target.value);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-100 to-purple-300 text-center text-purple-500">
      <h1 className="text-6xl">QR Code</h1>
      <div className="mt-16 flex flex-col items-center justify-center gap-4">
      {qrText ? (
          <QRCode value={qrText} />
        ) : (
          // This was the original code
          <div className="flex aspect-square w-64 items-center justify-center border-2 border-solid border-purple-500">
            <div className="">Nothing</div>
          </div>
        )}
        
        <label htmlFor="qrValue">Write a text to convert it to QR code</label>
        <input
          className="rounded-md px-2 outline outline-1 focus:outline-none"
          type="text"
          name="qrValue"
          id="qrValue"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default App
