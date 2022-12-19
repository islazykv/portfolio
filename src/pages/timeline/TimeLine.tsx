import {
    Text,
    Box,
    VStack,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
    Circle,
  } from '@chakra-ui/react';
  
  import {TimeElement} from './TimeElement'
  
  export const TimeLine = () => {
    return (
        <Container 
            id='TimeLine' 
            maxWidth='container.xl' 
            border='2px solid black'
        >
            <Box 
                maxW="7xl" 
                mt={5} 
                p={4}
            >
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                    }}
                    gap={4}
                    mb={20}
                >
                    <GridItem
                        colSpan={1}
                    >
                        <VStack alignItems="flex-start" spacing="20px">
                            <chakra.h2 fontSize="3xl" fontWeight="700">
                                Education & Professional Experience
                            </chakra.h2>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <Flex>
                            <chakra.p
                                mt={10}
                            >
                                Legend:
                                <Flex alignItems='end'>      
                                    <Flex alignItems='center'>
                                        <Circle 
                                            mt={1}
                                            mb={1}
                                            mr={2}
                                            size={10} 
                                            bg='red.500'
                                        />
                                            <Text mr={5}>
                                                Education
                                            </Text>
                                    </Flex>
                                    <Flex alignItems='center'>
                                        <Circle 
                                            mt={1}
                                            mb={1}
                                            mr={2}
                                            size={10} 
                                            bg='purple.500'
                                        />
                                            <Text mr={5}>
                                                Experience
                                            </Text>
                                    </Flex>
                                    <Flex alignItems='center'>
                                        <Circle 
                                            mt={1}
                                            mb={1}
                                            mr={2}
                                            size={10} 
                                            bgGradient='linear(to-r, red.500 50%, purple.500 50%)'
                                        />
                                            <Text mr={5}>
                                                Education & Experience
                                            </Text>
                                    </Flex>
                                </Flex>  
                            </chakra.p>
                        </Flex>
                    </GridItem>
                </Grid>

                <Text 
                textAlign='center' 
                mt={12}
                >
                    The following timeline does not maintain the proper scale!
                </Text>

                <Divider borderColor='gray.300' mb={12} />

                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(6, 1fr)',
                    }}
                >
                    <Text ml={5}>
                        2011
                    </Text>
                    <Text/>  
                    <Text/>
                    <Text/>
                    <Text/>
                    <Text/>
                </Grid>

                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    }}
                >
                    <TimeElement
                        title={'B. Sc. Eng.'}
                        degree={'Civil Engineering'}
                        university={'Politechnika Krakowska'}
                        country={'Poland'}
                        year={'10/2011-02/2015'}
                        thesis_link='https://islazykv.github.io/islazykv/pdfs/B.Sc.Eng.-Civil-Engineering.pdf'
                        enableMargin
                        enableArrow
                        circleColor='red.500'
                        circlePositionX='40%'
                        circlePositionY='-6'
                        stretch='left'
                        period={500}
                    />
                    <TimeElement
                        title={'B. Sc. Eng.'}
                        degree={'Applied Physics'}
                        university={'Politechnika Krakowska'}
                        year={'10/2012-02/2016'}
                        country={'Poland'}
                        thesis_link='https://islazykv.github.io/islazykv/pdfs/B.Sc.Eng.-Applied-Physics.pdf'
                        enableMargin
                        circleColor='red.500'
                        circlePositionX='20%'
                        circlePositionY='-6'
                        stretch='left'
                        period={400}
                    />
                    <TimeElement
                        title={'M. Sc. Eng.'}
                        degree={'Applied Physics'}
                        university={'Politechnika Krakowska'}
                        year={'02/2016-05/2017'}
                        country={'Poland'}
                        thesis_link='https://islazykv.github.io/islazykv/pdfs/M.Sc.Eng.-Applied-Physics.pdf'
                        enableMargin
                        circleColor='red.500'
                        circlePositionX='45%'
                        circlePositionY='-6'
                        stretch='left'
                        period={430}
                    />
                    <TimeElement
                        title={'R&D Physics Intern'}
                        degree={'Camlin Group'}
                        university={''}
                        year={'04/2016-09/2016'}
                        country={'Switzerland'}
                        enableMargin
                        enableRadius
                        circleColor='purple.500'
                        circlePositionX='20%'
                        circlePositionY='-6'
                        stretch='left'
                        period={200}
                    />
                </Grid>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(6, 1fr)',
                    }}
                >
                    <Text/>
                    <Text ml={-100}>
                        2023
                    </Text>
                    <Text/>
                    <Text/>
                    <Text/>
                    <Text>
                        2017
                    </Text>
                </Grid>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    }}
                >
                    <TimeElement
                        circlePositionX=''
                        circlePositionY=''
                    />
                    <TimeElement
                        title={'Postdoctoral Research Fellow'}
                        degree={'Applied Physics'}
                        university={'Western Norway University of Applied Sciences'}
                        year={'present-01/2022'}
                        country={'Norway'}
                        circleColor='purple.500'
                        circlePositionX='40%'
                        circlePositionY='-49'
                        stretch='right'
                        period={300}
                        
                    />
                    <TimeElement
                        title={'Ph. D.'}
                        degree={'Particle Physics'}
                        university={'Institute of Nuclear Physics & University of Ferrara'}
                        year={'07/2021-10/2017'}
                        country={'Italy'}
                        thesis_link='https://islazykv.github.io/islazykv/pdfs/Ph.D.-Particle-Physics.pdf'
                        circleGradient='linear(to-r, red.500 50%, purple.500 50%)'
                        circlePositionX='10%'
                        circlePositionY='-49'
                        stretch='right'
                        period={350}
                    />
                    <TimeElement
                        title={'Software Developer'}
                        degree={'Freelance'}
                        university={''}
                        year={'09/2017-10/2016'}
                        country={'Poland'}
                        circleColor='purple.500'
                        circlePositionY='-49'
                        circlePositionX='30%'
                        stretch='right'
                        period={250}
                    />
                </Grid>
                <Divider borderColor='gray.300' mb={12} />
            </Box>
        </Container>
    );
  }