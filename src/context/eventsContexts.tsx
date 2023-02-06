import { createContext, useContext, useState } from 'react';
import { IEvent } from '@/types/event';

type EventsContextData = {
  eventList: IEvent[];
  addEvent: (event: IEvent) => void;
};

export const EventsContext = createContext({} as EventsContextData);

type EventsContextProviderProps = {
  children: React.ReactNode;
};

export function EventsContextProvider({
  children,
}: EventsContextProviderProps) {
  const [eventList, setEventList] = useState<IEvent[]>([]);

  function addEvent(event: IEvent) {
    setEventList((prevEvent) => [event, ...prevEvent]);
  }

  return (
    <EventsContext.Provider value={{ eventList, addEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

export const useEvents = () => {
  return useContext(EventsContext);
};
