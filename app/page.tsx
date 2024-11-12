'use client';
import { useCountStore } from '@/store/store';

export default function Home() {
  const count = useCountStore((state) => state.count);
  const { increase, decrease } = useCountStore((state) => state.actions);

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <div className="text-xl font-bold">{count}</div>
      <div>
        <button className="text-2xl w-10 h-10 bg-sky-300" onClick={increase}>
          +
        </button>
        <button className="text-2xl w-10 h-10 bg-red-300" onClick={decrease}>
          -
        </button>
      </div>
    </div>
  );
}
