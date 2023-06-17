import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>↓リンク</p>
      <div>
        <Link href={`/sample`}>・サンプルコード</Link>
      </div>
      <div>
        <Link href={`/sample/node`}>・ノードのみ。最小限の構成。</Link>
      </div>
    </>
  );
}
