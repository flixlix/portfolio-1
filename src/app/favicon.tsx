export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/svg+xml";

export default function Icon() {
  const svgData = `
    <svg width="${size.width}" height="${size.height}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10L90 90M90 10L10 90" stroke="#0066CC" stroke-width="10" stroke-linecap="round"/>
      <style>
        @media (prefers-color-scheme: dark) {
          path {
            stroke: #2997ff;
          }
        }
      </style>
    </svg>`;

  return <div dangerouslySetInnerHTML={{ __html: svgData }} />;
}
