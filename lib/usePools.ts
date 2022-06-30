import { usePromised, useStargateClient } from './utils';

export default function usePools() {
  const { data: client } = useStargateClient();

  return usePromised(() => client?.clp.getPools({}), Boolean(client));
}
