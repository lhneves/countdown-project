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
  LayoutProps,
  SpaceProps,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from './logo';
import ThemeToggleButton from './themeToggleButton';

type LinkProps = {
  href: string;
  path: string;
  children: React.ReactNode;
};
const LinkItem = ({
  href,
  path,
  children,
  ...props
}: LayoutProps & LinkProps & SpaceProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = ({ path, ...props }: { path: string }) => {
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
          <LinkItem
            href="/login"
            path={path}
            display={{ base: 'none', md: 'inline-block' }}
            mr={4}
          >
            Login
          </LinkItem>
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
                <NextLink href="/login" passHref>
                  <MenuItem>Login</MenuItem>
                </NextLink>
                <NextLink href="/my-events" passHref>
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
