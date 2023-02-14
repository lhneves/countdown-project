import { useToast } from '@chakra-ui/react';
import { createContext, useContext, useEffect, useState } from 'react';

type GoogleContextData = {
  handleAuthClick: () => void;
  handleSignoutClick: () => void;
  createEvent: (event: gapi.client.calendar.EventInput) => void;
  isUserSignIn: boolean;
};

export const GoogleContext = createContext({} as GoogleContextData);

type GoogleContextProviderProps = {
  children: React.ReactNode;
};

export function GoogleContextProvider({
  children,
}: GoogleContextProviderProps) {
  const toast = useToast();
  const [isUserSignIn, setIsUserSignIn] = useState(false);

  const [tokenClient, setTokenClient] =
    useState<google.accounts.oauth2.TokenClient>();

  async function initClient() {
    await gapi.load('client:auth2', () => {
      gapi.client
        .init({
          apiKey: process.env.GOOGLE_API_KEY,
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
          ],
        })
        .then(() => {
          getTokenCLient()
            .then((tokenClient) => setTokenClient(tokenClient))
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  async function getTokenCLient() {
    if (!process.env.GOOGLE_CLIENT_ID) {
      return undefined;
    }

    const tokenClient = await google.accounts.oauth2.initTokenClient({
      client_id: process.env.GOOGLE_CLIENT_ID,
      scope: 'https://www.googleapis.com/auth/calendar',
      callback: (tokenResponse): void => {
        if (
          google.accounts.oauth2.hasGrantedAllScopes(
            tokenResponse,
            'https://www.googleapis.com/auth/calendar',
          )
        ) {
          setIsUserSignIn(true);
        }
      },
    });

    return tokenClient;
  }

  function handleAuthClick() {
    if (gapi && tokenClient) {
      if (gapi.client.getToken() === null) {
        tokenClient.requestAccessToken({ prompt: 'consent' });
      }
    } else {
      console.error('Error: gapi not loaded');
    }
  }

  function handleSignoutClick(): void {
    if (gapi) {
      const token = gapi.client.getToken();
      if (token !== null) {
        google.accounts.id.disableAutoSelect();
        google.accounts.oauth2.revoke(token.access_token, () => {
          toast({
            description: 'Sign Out Successfully',
            status: 'success',
            isClosable: true,
            position: 'top-right',
          });
        });
        gapi.client.setToken(null);
        setIsUserSignIn(false);
      }
    } else {
      console.error('Error: this.gapi not loaded');
    }
  }

  function createEvent(event: gapi.client.calendar.EventInput) {
    if (gapi.client.getToken()) {
      return gapi.client.calendar.events
        .insert({
          calendarId: 'primary',
          resource: event,
        })
        .then(() =>
          toast({
            description: 'Event Created successfully',
            status: 'success',
            isClosable: true,
            position: 'top-right',
          }),
        )
        .catch((error) => console.error(error));
    } else {
      new Error('Error: this.gapi not loaded');
      return false;
    }
  }

  useEffect(() => {
    initClient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GoogleContext.Provider
      value={{
        handleAuthClick,
        handleSignoutClick,
        createEvent,
        isUserSignIn,
      }}
    >
      {children}
    </GoogleContext.Provider>
  );
}

export const useGoogleCalendar = () => {
  return useContext(GoogleContext);
};
