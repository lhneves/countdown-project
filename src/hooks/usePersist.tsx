import { useState, useEffect, useCallback } from 'react';
import browserStorage from 'store';
import { IEvent } from '@/types/event';

const usePersist = (
  storageKey: string,
  initialState: IEvent[],
): [IEvent[], (value: IEvent[]) => void] => {
  const [state, setInternalState] = useState(initialState);

  useEffect(() => {
    const storageInBrowser: IEvent[] = browserStorage.get(storageKey);

    if (storageInBrowser) {
      const parseDateStorageInBrowser = storageInBrowser.map((event) => {
        const objCopy = Object.assign({}, event);
        objCopy.date = new Date(objCopy.date);
        return objCopy;
      });

      setInternalState(parseDateStorageInBrowser);
    }
  }, [storageKey]);

  const setState = useCallback(
    (valueToStore: IEvent[]) => {
      browserStorage.set(storageKey, valueToStore);
      setInternalState(valueToStore);
    },
    [storageKey],
  );

  return [state, setState];
};

export default usePersist;
