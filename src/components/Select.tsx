"use client";
import { useAtom } from 'jotai';
import { gameIdAtom } from '@/atoms/state';

export default function Select() {
  const [gameId, setGameId] = useAtom(gameIdAtom); // Jotaiの`gameIdAtom`を使う

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setGameId(value); // 入力された値をgameIdAtomにセット
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // ページリロードを防止
    if (gameId.length < 4) {
      alert('Game ID must be at least 4 characters long.');
      return;
    }
    alert(`Game ID set to: ${gameId}`);
  };

  return (
    <div className="border bord p-24 m-8 bg-blue-200">
      <h1 className="font-semibold text-4xl">Select</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <label htmlFor="gameId" className="block text-lg font-semibold">
          Enter Game ID (at least 4 characters):
        </label>
        <input
          id="gameId"
          type="text"
          value={gameId}
          onChange={handleInputChange}
          className="mt-2 p-2 border rounded w-full"
          placeholder="Enter Game ID..."
        />

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          disabled={gameId.length < 4} // 4文字未満の場合は無効化
          
        >
          Submit
        </button>
      </form>
    </div>
  );
}

