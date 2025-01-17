"use client";
import { useAtom } from 'jotai';
import { gameIdAtom, userIdAtom, gamePageModeAtom, topPageModeAtom, } from '@/atoms/state';
import Select from '@/components/Select';
import Create from '@/components/Create';
import Enter from '@/components/Enter';

export default function Home() {
  const [gameId, setGameId] = useAtom(gameIdAtom);
  const [userId, setUserId] = useAtom(userIdAtom); 
  const [topPageMode, setTopPageMode] = useAtom(topPageModeAtom);
  const [gamePageMode, setGamePageMode] = useAtom(gamePageModeAtom);

  const renderComponent = () => {
    console.log(topPageMode.mode);
    switch (topPageMode.mode) {
      case 'select':
        return <Select />;
      case 'create':
        return <Create />;
      case 'enter':
        return <Enter />;
      default:
        return (
          <div className="border bord p-24 m-8 bg-slate-200">
            <h1 className="font-semibold text-4xl">Welcome</h1>
          </div>
        );
    }
  };

  const resetState = () => {
    setGameId("");
    setUserId("");
    setTopPageMode({ mode: 'top' });
    setGamePageMode({ mode: 'prepare' });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-semibold text-4xl">JOTAI Project</h1>
      {/* <p className="font-semibold text-slate-500 text-2xl mt-4">{topPageMode.mode}</p> */}
      <div className="my-4">{renderComponent()}</div>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setTopPageMode({ mode: 'select' })}
        >
          Select
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={() => setTopPageMode({ mode: 'create' })}
        >
          Create
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setTopPageMode({ mode: 'enter' })}
        >
          Enter
        </button>
      </div>
      <button
        className="px-4 py-2 bg-slate-400 text-white rounded mt-8"
        onClick={() => resetState()}
      >
        Reset
      </button>
      <div className="px-16 py-16 my-4 bg-slate-200">
      <h1 className="font-semibold mb-4">Global State</h1>
      <ul>
        <li>・gameId: {gameId}</li>
        <li>・userId: {userId}</li>
        <li>・topPageMode: {topPageMode.mode}</li>
        <li>・gamePageMode: {gamePageMode.mode}</li>
        
      </ul>
      </div>
      
    </div>


  );
}