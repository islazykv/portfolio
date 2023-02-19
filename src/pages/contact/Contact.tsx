import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    HStack,
    VStack,
    Link,
    Stack,
    Image,
    Flex,
    useColorModeValue
  } from '@chakra-ui/react';
import { useState } from 'react';


  export const Contact = () => {

    const inspirehepMode = useColorModeValue('Inspirehep-logo-light.png', 'Inspirehep-logo-dark.png')
    const githubMode = useColorModeValue('Github-logo-light.png', 'Github-logo-dark.png')


    return (
        <Container 
          id='Contact' 
          maxW='container.xl' 
          mb={20}
        >
          <Box 
            p={4}
          >
            <Heading 
              fontWeight={600}
              fontSize={{ base: '2xl', md: '4xl' }}
              fontFamily= 'Playfair Display'>
              Contact
            </Heading>       
            <Stack
                direction={{base: 'column', md: 'row'}}
            >
                <Flex
                    flex={1}
                    justifyContent='center'
                    direction='column'
                >
                    <Box
                        ml={5}
                    >
                        <Box 
                            pb={5}
                        >
                            <Text
                                fontWeight={600}
                                fontSize={{ base: 'xl', md: '2xl' }}
                                fontFamily= 'Playfair Display'
                                pb={5}
                            >
                                Get in touch.
                            </Text>
                            <Text
                                color={'gray.500'}
                            >
                                Feel free to contact me with anything.
                            </Text>
                            <Text
                                color={'gray.500'}
                            >
                                You can contact me directly at: <b>Igor.Slazyk@hvl.no</b>
                            </Text>
                        </Box>
                        <Box>
                            <Image
                                src={'Robot.png'}
                                alt={'Robot'}
                                w={'80%'}
                            />
                        </Box>
                    </Box>
                </Flex>
                <Flex
                    flex={1}
                    justifyContent='center'
                    direction='column'
                >
                    <VStack 
                        spacing={5}
                        justify='center'
                        align='center'
                    >
                        <a style={{width:'20%'}} href={'mailto:Igor.Slazyk@hvl.no'}>
                            <Image
                                src={'Mail.png'}
                                alt={'Mail'}
                            />
                        </a>
                        <a style={{width:'40%'}} href={'https://www.linkedin.com/in/igor-slazyk/'} target="_blank">
                            <Image
                                src={'Linkedin-logo.png'}
                                alt={'LinkedIn-Logo'}
                            />
                        </a>
                        <a style={{width:'40%'}} href={'https://orcid.org/0000-0002-3513-9737'} target="_blank">
                            <Image
                                src={'Orcid-logo.png'}
                                alt={'Orcid-Logo'}
                            />
                        </a>
                        <a style={{width:'40%'}} href={'https://inspirehep.net/authors/1876245'} target="_blank">
                            <Image
                                src={inspirehepMode}
                                alt={'Inspirehep-Logo'}
                            />
                        </a>
                        <a style={{width:'40%'}} href={'https://github.com/islazykv'} target="_blank">
                            <Image
                                src={githubMode}
                                alt={'Github-Logo'}
                            />
                        </a>
                        <a style={{width:'40%'}} href={'https://gitlab.cern.ch/islazyk'} target="_blank">
                            <Image
                                src={'Gitlab-logo.png'}
                                alt={'Gitlab-Logo'}
                            />
                        </a>
                    </VStack>
                </Flex>
            </Stack>
          </Box>
        </Container>
    );
  }