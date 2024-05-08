import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

export default function QRCodeSample2() {
  const [qrText, setQrText] = useState<string | null>(null);
  const handleChange = (e: React.BaseSyntheticEvent) => {
    setQrText(e.target.value);
  };
  
  return (
    <div className="min-h-screen text-center">
      <h1 className="text-6xl">QR Code2</h1>
      <div className="flex flex-col items-center justify-center gap-4 mt-16">
      {qrText ? (
          <QRCodeSVG 
            value={qrText}
            level={"Q"}
            size={200}
            fgColor={"#1E90FF"}
            includeMargin={true}
            imageSettings={{src: "/logo_50x50.png", height: 40, width:40, excavate: true}}/>
        ) : (
          // This was the original code
          <div className="flex items-center justify-center w-64 border-2 border-gray-500 border-solid aspect-square">
            <div className="">Nothing</div>
          </div>
        )}
        
        <label htmlFor="qrValue">QR 코드로 만들 텍스트를 입력하세요.</label>
        <input
          className="px-2 rounded-md outline outline-1 focus:outline-none"
          type="text"
          id="qrValue"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}