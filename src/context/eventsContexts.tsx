import { createContext, useContext } from 'react';
import { IEvent } from '@/types/event';
import usePersist from '@/hooks/usePersist';

type EventsContextData = {
  eventList: IEvent[];
  addEvent: (event: IEvent) => void;
  toggleHasReached: (id: string) => void;
  deleteEventById: (id: string) => void;
  searchEventByName: (name: string) => IEvent[];
};

export const EventsContext = createContext({} as EventsContextData);

type EventsContextProviderProps = {
  children: React.ReactNode;
};

export function EventsContextProvider({
  children,
}: EventsContextProviderProps) {
  const [eventList, setEventList] = usePersist('eventList', []);

  function addEvent(event: IEvent) {
    setEventList([event, ...eventList]);
  }

  function toggleHasReached(id: string) {
    const newEventList = eventList.map((event) => {
      const objCopy = Object.assign({}, event);
      if (objCopy.id === id) {
        objCopy.hasReached = true;
      }
      return objCopy;
    });

    setEventList(newEventList);
  }

  function searchEventByName(name: string) {
    if (name === '') {
      return eventList;
    }

    return eventList.filter((event) =>
      event.eventName.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
    );
  }

  function deleteEventById(id: string) {
    const newEventList = eventList.filter((event) => event.id != id);

    setEventList(newEventList);
  }

  return (
    <EventsContext.Provider
      value={{
        eventList,
        addEvent,
        toggleHasReached,
        searchEventByName,
        deleteEventById,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}

export const useEvents = () => {
  return useContext(EventsContext);
};
