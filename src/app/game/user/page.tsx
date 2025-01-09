"use client";
import { useAtom } from 'jotai';
import { gameIdAtom, userIdAtom, gamePageModeAtom, topPageModeAtom, } from '@/atoms/state';

import Prepare from '@/components/Prepare';
import Generate from '@/components/Generate';
import Vote from '@/components/Vote';
import Result from '@/components/Result';
import Link from 'next/link';

export default function Home() {
  const [gameId] = useAtom(gameIdAtom);
  const [userId] = useAtom(userIdAtom); 
  const [topPageMode] = useAtom(topPageModeAtom);
  const [gamePageMode, setGamePageMode] = useAtom(gamePageModeAtom);

  const renderComponent = () => {
    console.log(gamePageMode.mode);
    switch (gamePageMode.mode) {
      case 'prepare':
        return <Prepare />;
      case 'generate':
        return <Generate />;
      case 'vote':
        return <Vote />;
      case 'result':
        return <Result />;
     
    }
  };

 

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-semibold text-4xl">JOTAI Project</h1>
      {/* <p className="font-semibold text-slate-500 text-2xl mt-4">{topPageMode.mode}</p> */}
      <div className="my-4">{renderComponent()}</div>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setGamePageMode({ mode: 'prepare' })}
        >
          Prepare
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={() => setGamePageMode({ mode: 'generate' })}
        >
          Generate
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setGamePageMode({ mode: 'vote' })}
        >
          Vote
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setGamePageMode({ mode: 'result' })}
        >
          Result
        </button>
      </div>
     


      <div className="px-16 py-16 my-4 bg-slate-200">
      <h1 className="font-semibold mb-4">Global State</h1>
      <ul>
        <li>・gameId: {gameId}</li>
        <li>・userId: {userId}</li>
        <li>・topPageMode: {topPageMode.mode}</li>
        <li>・gamePageMode: {gamePageMode.mode}</li>
        
      </ul>
      </div>
      <Link
  href="/"
  className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300 ease-in-out shadow-md"
>
  戻る
</Link>
    </div>


  );
}