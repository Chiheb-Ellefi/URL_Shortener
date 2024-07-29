import { useEffect, useState } from "react";

export default function App() {
  const [svgData, setSvgData] = useState("");
  useEffect(() => {
    setSvgData(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h41v41H0z"/><path stroke="#000000" d="M4 4.5h7m1 0h1m3 0h1m1 0h2m1 0h2m3 0h3m1 0h7M4 5.5h1m5 0h1m2 0h1m1 0h1m2 0h2m1 0h1m1 0h2m2 0h2m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m3 0h1m1 0h2m2 0h1m1 0h3m1 0h2m2 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h6m3 0h1m1 0h2m1 0h1m3 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m2 0h2m3 0h3m1 0h3m1 0h1m3 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m2 0h1m1 0h1m3 0h2m1 0h1m1 0h3m3 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M13 11.5h2m1 0h1m6 0h1m1 0h1m2 0h1M6 12.5h1m1 0h3m1 0h2m1 0h1m2 0h2m5 0h3m1 0h1m3 0h1m2 0h1M5 13.5h1m1 0h3m1 0h3m1 0h1m1 0h4m2 0h6m1 0h1m3 0h3M4 14.5h2m2 0h3m2 0h1m3 0h1m1 0h1m2 0h3m1 0h1m2 0h2m1 0h5M5 15.5h1m1 0h3m1 0h3m2 0h2m4 0h5m1 0h1m1 0h1m4 0h2M4 16.5h1m2 0h5m1 0h1m2 0h7m3 0h1m1 0h5m3 0h1M4 17.5h1m1 0h1m2 0h1m3 0h1m5 0h5m2 0h1m1 0h3m2 0h4M4 18.5h1m2 0h8m4 0h3m2 0h2m4 0h2m1 0h4M5 19.5h1m6 0h1m1 0h1m2 0h1m2 0h1m1 0h2m1 0h2m1 0h2m1 0h1m4 0h1M7 20.5h1m2 0h2m1 0h1m1 0h1m1 0h1m2 0h3m2 0h1m1 0h2m1 0h2m3 0h1M4 21.5h1m1 0h3m2 0h1m1 0h3m2 0h1m3 0h2m1 0h2m2 0h2m2 0h2M5 22.5h1m1 0h2m1 0h2m3 0h3m1 0h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3M4 23.5h3m6 0h1m1 0h1m1 0h1m2 0h1m3 0h3m3 0h2m3 0h1M4 24.5h3m3 0h1m1 0h1m2 0h2m2 0h2m4 0h1m1 0h4m2 0h1m1 0h1M5 25.5h3m1 0h1m1 0h1m2 0h1m1 0h2m6 0h2m1 0h1m6 0h3M4 26.5h1m1 0h2m2 0h2m3 0h1m1 0h2m4 0h4m1 0h1m1 0h1m3 0h1m1 0h1M5 27.5h1m3 0h1m1 0h1m2 0h2m2 0h1m1 0h1m1 0h2m1 0h2m2 0h1m2 0h2m1 0h1M4 28.5h1m3 0h1m1 0h1m2 0h1m2 0h1m1 0h3m4 0h1m2 0h5m2 0h1M12 29.5h1m2 0h5m1 0h2m5 0h1m3 0h2m2 0h1M4 30.5h7m3 0h1m3 0h2m1 0h1m2 0h2m1 0h2m1 0h1m1 0h5M4 31.5h1m5 0h1m1 0h1m2 0h4m2 0h2m1 0h1m2 0h2m3 0h1M4 32.5h1m1 0h3m1 0h1m1 0h4m1 0h1m1 0h1m1 0h2m1 0h1m3 0h6m1 0h2M4 33.5h1m1 0h3m1 0h1m2 0h1m3 0h1m1 0h1m1 0h3m4 0h2m2 0h1m1 0h1M4 34.5h1m1 0h3m1 0h1m1 0h1m2 0h1m6 0h1m1 0h1m2 0h1m1 0h1m1 0h3m2 0h1M4 35.5h1m5 0h1m11 0h2m1 0h4m1 0h2m3 0h1M4 36.5h7m2 0h2m1 0h1m5 0h1m1 0h1m2 0h2m1 0h4m1 0h2"/></svg>'
    );
  }, []);

  return (
    <div className=" justify-center items-center">
      <h2>Your QR Code</h2>
      {/* Render the SVG */}
      <div
        className=" w-1/4 h-1/4 justify-center"
        dangerouslySetInnerHTML={{ __html: svgData }}
      />
    </div>
  );
}
