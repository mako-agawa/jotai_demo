"use client";
import { userIdAtom } from '@/atoms/state';
import { useAtom } from 'jotai';
import { v4 as uuidv4 } from 'uuid'; // UUID v4をインポート
import { useRouter } from 'next/navigation'; // ページ遷移用

export default function Enter() {
  const [userId, setUserId] = useAtom(userIdAtom); // UUIDを保存するためのアトム
  const router = useRouter(); // ページ遷移用

  const handleEnterRoom = () => {
    const newUuid = uuidv4(); // 新しいUUIDを生成
    setUserId(newUuid); // UUIDをアトムにセット
    console.log(userId);

    // 少し待機してからページ遷移
    router.push('/game/user'); // ルームに入るページへ遷移
  };

  return (
    <div className="border bord p-24 m-8 bg-red-200">
      <h1 className="font-semibold text-4xl">Enter</h1>
      <button
        onClick={handleEnterRoom}
        className="inline-block my-2 px-4 py-2 bg-slate-400 text-white font-semibold rounded hover:bg-blue-600 transition duration-300 ease-in-out shadow-md"
      >
        ルームに入る
      </button>
    </div>
  );
}