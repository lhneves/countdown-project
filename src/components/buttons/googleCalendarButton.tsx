import React from 'react';
import { Button, useColorModeValue, useToast } from '@chakra-ui/react';
import { SiGooglecalendar } from 'react-icons/si';
import { useGoogleCalendar } from '@/context/googleContext';
import { IEvent } from '@/types/event';

export const GoogleCalendarButton = ({ event }: { event: IEvent }) => {
  const toast = useToast();
  const { createEvent, isUserSignIn } = useGoogleCalendar();

  function createNewEvent() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dateTimeStart = event.date.toISOString();
    const dateTimeEnd = new Date(event.date);
    dateTimeEnd.setMinutes(event.date.getMinutes() + 30);

    createEvent({
      summary: event.eventName,
      start: { dateTime: dateTimeStart, timeZone },
      end: { dateTime: dateTimeEnd.toISOString(), timeZone },
    });
  }

  return (
    <Button
      size="sm"
      rightIcon={<SiGooglecalendar />}
      onClick={() => {
        if (isUserSignIn) {
          createNewEvent();
        } else {
          toast({
            description: 'Sign In With Google to Create Event',
            status: 'error',
            isClosable: true,
            position: 'top-right',
          });
        }
      }}
      colorScheme={useColorModeValue('purple', 'orange')}
      cursor="pointer"
      variant="outline"
    >
      Create Event
    </Button>
  );
};
