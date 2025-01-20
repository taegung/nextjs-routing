import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="p-2 bg-lime-200">Header</header>
        {/* children을 통해 page.js의 컴포넌트가 전달됨 */}
        {children}
        <footer className="p-1 bg-orange-200">Footer</footer>
      </body>

      {/* 2.최상위 경로면 app.layout.js에 작성했기 때문에
      모든 하위 라우트 경로들의 레이아웃으로 결정됨
       */}
    </html>
  );
}
