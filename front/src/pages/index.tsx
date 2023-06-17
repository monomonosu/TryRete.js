import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>↓リンク</p>
      <Link href={`/sample`}>・サンプルコード</Link>
    </>
  );
}
