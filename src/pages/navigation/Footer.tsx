import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { Menu } from './Menu'

type Props = {
  links: string[]
};

export const Footer : FC<Props> = (props) => {
  const {links} = props
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <SimpleGrid columns={{base:3,md:6}} spacing={10}>
            {links.map((link:string) => (
              <Menu key={link}>{link}</Menu>
            ))}
        </SimpleGrid>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>
            Thank you for visiting my website!
          </Text>
          <Text>
            Developed using React.js, TypeScript.js and ChakraUI
          </Text>
        </Container>
      </Box>
    </Box>
  );
}