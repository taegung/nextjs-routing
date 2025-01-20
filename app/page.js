import Link from "next/link";

export default function Home() {
  return (
    // Shift + Alt + Left/Right key - 영역 선택/확장
    <>
      <main>Hello Next!</main>
      <Link href="/blog" className="text-2xl text-blue-500 underline">블로그</Link><br/>
      <Link href="/products" className="text-2xl text-blue-500 underline">상품</Link>
    </>
  );
}
