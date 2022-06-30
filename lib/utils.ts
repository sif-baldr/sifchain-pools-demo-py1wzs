import * as React from 'react';
import { createQueryClient } from '@sifchain/stargate';

export function usePromised<T>(
  promiseFn?: () => Promise<T>,
  enabled?: boolean
) {
  const [data, setData] = React.useState<T>();
  const [isLoading, setIsloading] = React.useState(false);
  const [error, setError] = React.useState<Error>();

  React.useEffect(() => {
    if (!promiseFn || !enabled || data) return;
    setIsloading(true);
    promiseFn()
      .then((x) => {
        setIsloading(false);
        setData(x);
      })
      .catch((error) => {
        setIsloading(false);
        setError(error);
      });
  }, [promiseFn, enabled]);

  return { data, isLoading, error };
}

export function useStargateClient() {
  return usePromised(
    () => createQueryClient('https://rpc.sifchain.finance'),
    true
  );
}
