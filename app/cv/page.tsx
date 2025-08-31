"use client";
import { useEffect } from "react";
import PDFObject from "pdfobject";

// export default function PDFViewer() {
//   useEffect(() => {
//     PDFObject.embed("/myfile.pdf", "#my-pdf");
//   }, []);

export default function Page() {
  useEffect(() => {
    const customFallback = " <a href='[url]' download> Your browser does not support inline embedded PDFs. \n Click here to download the CV</a>";
    PDFObject.embed("/cv.pdf", "#my-pdf", { fallbackLink: customFallback });
  }, []);

  return (
    <div className="flex flex-col h-full overflow-auto">
      <div className=" z-10 flex flex-col items-center justify-center gap-10 text-center px-[5vw] mt-10">
        <div className="w-full max-w-[95vw] sm:max-w-5xl rounded-3xl border-black border-4 shadow-lg p-2 bg-gray-700 overflow-hidden" >
          <div className="bg-gray-800 rounded-3xl font-mono text-sm text-primary/90 p-3 sm:p-4 md:p-6 space-y-4">
            <div className="bg-black border p-4 sm:p-6 border-primary/50 overflow-hidden shadow-lg crt flex flex-col">
              <h1 className="text-4xl md:text-5xl font-bold text-green-400 mt-2" style={{ fontFamily: "var(--font-rubik-doodle-shadow)" }}>CV</h1>
              <div id="my-pdf" className="w-full h-134  mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

