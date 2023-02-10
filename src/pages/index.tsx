import { AllEvents } from '@/components/events/allEvents';
import { CreateEvent } from '@/components/events/createEvent';
import { useEvents } from '@/context/eventsContexts';

export default function Home() {
  const { eventList } = useEvents();

  return (
    <>
      <CreateEvent />
      {eventList.length > 0 && <AllEvents />}
    </>
  );
}
