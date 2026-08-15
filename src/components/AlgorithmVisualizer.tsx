import { useState, useEffect, useRef } from 'react';

type Algorithm = 'bubble' | 'selection' | 'insertion';

export function AlgorithmVisualizer() {
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState<Algorithm>('bubble');
  const [speed, setSpeed] = useState(100);
  const [arraySize, setArraySize] = useState(20);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const abortRef = useRef(false);

  useEffect(() => {
    generateArray();
    return () => { abortRef.current = true; };
  }, [arraySize]);

  const generateArray = () => {
    const newArray = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 80) + 10
    );
    setArray(newArray);
    setActiveIndices([]);
    setSortedIndices([]);
  };

  const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const bubbleSort = async () => {
    const arr = [...array];
    const n = arr.length;
    setSorting(true);
    abortRef.current = false;

    for (let i = 0; i < n - 1 && !abortRef.current; i++) {
      for (let j = 0; j < n - i - 1 && !abortRef.current; j++) {
        setActiveIndices([j, j + 1]);
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await sleep(speed);
        }
        await sleep(speed / 2);
      }
      setSortedIndices(prev => [...prev, n - 1 - i]);
    }
    setSortedIndices(Array.from({ length: n }, (_, i) => i));
    setActiveIndices([]);
    setSorting(false);
  };

  const selectionSort = async () => {
    const arr = [...array];
    const n = arr.length;
    setSorting(true);
    abortRef.current = false;

    for (let i = 0; i < n - 1 && !abortRef.current; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n && !abortRef.current; j++) {
        setActiveIndices([j, minIdx]);
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
        await sleep(speed / 2);
      }
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        setArray([...arr]);
        await sleep(speed);
      }
      setSortedIndices(prev => [...prev, i]);
    }
    setSortedIndices(Array.from({ length: n }, (_, i) => i));
    setActiveIndices([]);
    setSorting(false);
  };

  const insertionSort = async () => {
    const arr = [...array];
    const n = arr.length;
    setSorting(true);
    abortRef.current = false;

    for (let i = 1; i < n && !abortRef.current; i++) {
      let j = i;
      while (j > 0 && arr[j] < arr[j - 1] && !abortRef.current) {
        setActiveIndices([j, j - 1]);
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        setArray([...arr]);
        await sleep(speed);
        j--;
      }
      setSortedIndices(prev => [...prev, i]);
    }
    setSortedIndices(Array.from({ length: n }, (_, i) => i));
    setActiveIndices([]);
    setSorting(false);
  };

  const startSort = () => {
    if (sorting) return;
    setSortedIndices([]);
    switch (algorithm) {
      case 'bubble': bubbleSort(); break;
      case 'selection': selectionSort(); break;
      case 'insertion': insertionSort(); break;
    }
  };

  const stopSort = () => {
    abortRef.current = true;
    setSorting(false);
    setActiveIndices([]);
  };

  return (
    <div className="bg-terminal-card rounded-xl border border-terminal-border p-6 w-full max-w-4xl mx-auto">
      <h3 className="text-terminal-green font-mono text-lg mb-4">// algorithm visualizer</h3>
      
      <div className="flex flex-wrap gap-4 items-center mb-6 text-sm">
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value as Algorithm)}
          className="bg-terminal-bg border border-terminal-border rounded px-3 py-2 text-gray-300 font-mono"
          disabled={sorting}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
        </select>

        <input
          type="range"
          min="10"
          max="50"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
          disabled={sorting}
          className="w-32 accent-terminal-green"
        />
        <span className="text-terminal-gray text-xs">Size: {arraySize}</span>

        <input
          type="range"
          min="20"
          max="300"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          disabled={sorting}
          className="w-32 accent-terminal-green"
        />
        <span className="text-terminal-gray text-xs">Speed: {speed}ms</span>

        {!sorting ? (
          <>
            <button
              onClick={startSort}
              className="bg-terminal-green text-black px-4 py-2 rounded font-mono font-semibold hover:opacity-80 transition"
            >
              ▶ Sort
            </button>
            <button
              onClick={generateArray}
              className="border border-terminal-border px-4 py-2 rounded font-mono text-gray-300 hover:bg-terminal-border transition"
            >
              ↻ New
            </button>
          </>
        ) : (
          <button
            onClick={stopSort}
            className="bg-terminal-red text-white px-4 py-2 rounded font-mono font-semibold hover:opacity-80 transition"
          >
            ■ Stop
          </button>
        )}
      </div>

      <div className="flex items-end h-64 gap-1 bg-terminal-bg rounded-lg p-4 border border-terminal-border">
        {array.map((value, index) => (
          <div
            key={index}
            className="flex-1 transition-all duration-75 rounded-t"
            style={{
              height: `${(value / 90) * 100}%`,
              backgroundColor: sortedIndices.includes(index)
                ? '#7bed9f'
                : activeIndices.includes(index)
                ? '#ffab5e'
                : '#70a5ff',
              opacity: sortedIndices.includes(index) ? 0.8 : 1,
            }}
          />
        ))}
      </div>

      <div className="flex justify-between mt-3 text-xs text-terminal-gray">
        <span>Algorithm: {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)} Sort</span>
        <span>{array.length} elements</span>
      </div>
    </div>
  );
}