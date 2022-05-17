import { Box, Flex, HStack, Button, useColorModeValue } from '@chakra-ui/react';
import NavLink from './NavLink';
import Account from '../Account';

const Links = ['Dashboard', 'Projects', 'Team'];

const Navbar = () => {
	return (
		<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
			<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
				<HStack spacing={8} alignItems={'center'}>
					<NavLink link={''}>Home</NavLink>
					<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
						{Links.map((link) => (
							<NavLink key={link} link={link}>
								{link}
							</NavLink>
						))}
					</HStack>
				</HStack>
				<Flex alignItems={'center'}>
					<Account />
				</Flex>
			</Flex>
		</Box>
	);
};

export default Navbar;
