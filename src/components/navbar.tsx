import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Heading,
  Flex,
  Menu,
  MenuButton,
  IconButton,
  useColorModeValue,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import Logo from './logo';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './buttons/themeToggleButton';
import { useGoogleCalendar } from '@/context/googleContext';

const Navbar = ({ ...props }) => {
  const { handleAuthClick, handleSignoutClick, isUserSignIn } =
    useGoogleCalendar();

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignContent="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tight">
            <Logo />
          </Heading>
        </Flex>

        <Box flex={1} textAlign="right">
          <Link
            as={NextLink}
            href="https://github.com/lhneves/countdown-project"
            p={2}
            display={{ base: 'none', md: 'inline-block' }}
          >
            View Source
          </Link>

          <Button
            size="sm"
            fontSize={13}
            rightIcon={<AiFillGoogleCircle size={22} />}
            height={10}
            onClick={() => {
              if (isUserSignIn) {
                handleSignoutClick();
              } else {
                handleAuthClick();
              }
            }}
            colorScheme={useColorModeValue('purple', 'orange')}
            mx={2}
          >
            {isUserSignIn ? 'Sign Out' : 'Sign In'}
          </Button>

          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <NextLink href="#allEvents" passHref>
                  <MenuItem>My Events</MenuItem>
                </NextLink>
                <NextLink
                  href="https://github.com/lhneves/countdown-project"
                  passHref
                >
                  <MenuItem>View Source</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
