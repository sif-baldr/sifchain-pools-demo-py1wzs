import * as React from 'react';
import usePools from './lib/usePools';

export default function App() {
  const { data: res, isLoading } = usePools();

  return (
    <div className="bg-stone-900 min-h-screen text-slate-50 p-8 flex flex-col gap-4">
      <h1 className="sticky top-0 bg-stone-900 p-4">Sifchain Pools</h1>
      <div>
        {isLoading && (
          <div className="border rounded-lg p-4">Loading pools...</div>
        )}
        {res && (
          <ul className="grid rounded-lg p-4 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {res.pools.map((pool) => (
              <li
                key={pool.externalAsset.symbol}
                className="p-4 rounded-xl bg-slate-800 shadow-sm grid gap-2 overflow-hidden"
              >
                <header>{pool.externalAsset.symbol.toUpperCase()}</header>
                <main>
                  <code>
                    <pre className="text-xs overflow-x-scroll">
                      {JSON.stringify(pool, null, 2)}
                    </pre>
                  </code>
                </main>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
