import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Image
} from '@chakra-ui/react';

export const About = () => {
  const homeBorder = useColorModeValue(
    'linear(to-tr, #7928CA, #d3d6dd, white, white, white, white, white, white, #d3d6dd, #7928CA)',
    'linear(to-tr, #7928CA, #d3d6dd, #1A202C, #1A202C, #1A202C, #1A202C, #1A202C, #1A202C, #d3d6dd, #7928CA,)'
  )
  const homeInner = useColorModeValue('white', 'gray.800')

  const imageShadow = useColorModeValue('0px 0px 100px 0px #2D3748', '0px 0px 100px 0px #7928CA')

  return (
    <>
      <Container 
        id='About'
        maxW='container.xl' 
        minH ='90vh'
        display='flex'
        alignItems='center'
        mt={5}
        mb={10}
      >
        <Box 
          bgGradient={homeBorder}
          padding={5}
        >
          <Stack
            bg={homeInner}
            direction={{base: 'column', md: 'row'}}
            py={{base: 10, md: 75}}
          >
            <Flex
              flex={1}
              justifyContent='center'
              textAlign='left'
              direction='column'
              pr={{base: 5, md: 0}}
              pl={{base: 5, md: 20}}
            >
              <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                fontFamily= 'Playfair Display'
              >
                Hello! 
                <br/>
                <Text 
                  as={'span'} 
                  fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                  pt={20}
                  fontStyle = 'italic'
                >
                  I am 
                </Text>
                <Text 
                  as={'span'} 
                  fontSize={{ base: 'xl', sm: '2xl', md: '6xl' }}
                  ml={3}
                >
                  Igor Slazyk
                </Text>
              </Heading>
              <Text 
                mt={10}
                fontWeight={600}
                textAlign='justify'
              >
                I am a postdoctoral research fellow working at the Western Norway University of Applied Sciences in Bergen.
              </Text>
              <Text 
                mt={5}
                color={'gray.500'}
                textAlign='justify'
              >
                My research area concerns mainly <b>particle</b> and <b>high energy physics</b>.
                I am also interested in <b>machine learning</b> and <b>artificial intelligence</b>.
                And I really enjoy <b>programming</b>.
              </Text>
              <Text 
                mt={5}
                color={'gray.500'}
              >
                Besides work, I like travelling and expanding my knowledge about cultures and customs of other countries.
              </Text>
            </Flex>
            <Flex 
              flex={1} 
              justifyContent='center'
              px={{base:20, md:50}}
              maxH={{md:'60vh'}}
            >
              <Image
                  alt={'Login Image'}
                  objectFit={'cover'}
                  src={'Me.jpeg'}
                  borderRadius='md'
                  boxShadow={imageShadow}
              />
            </Flex>
          </Stack>
        </Box>
      </Container>
    </>
  );
}