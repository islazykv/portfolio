import {
    Text,
    Box,
    Flex,
    Divider,
    Grid,
    Container,
    Circle,
    Heading,
} from '@chakra-ui/react';
  
import {TimeElement} from './TimeElement'
  
export const Education = () => {
    return (
        <Container 
            id='Education' 
            maxWidth='container.xl' 
            my={10}
        >
            <Box >
                <Heading 
                    fontWeight={600}
                    fontSize={{ base: '2xl', md: '4xl' }}
                    fontFamily= 'Playfair Display'
                >
                    Education and Professional Experience
                </Heading>
                <Flex 
                    display = {{base: 'none', md:'flex'}}
                    mt={10}
                >
                    <Text 
                        textAlign={'center'} 
                        alignSelf={'self-end'}
                        w={'50%'}
                    >
                        The following timeline does not maintain the proper scale!
                    </Text>
                    <Flex 
                        w={'50%'}
                        justifyContent={'center'}
                    >
                        <Text>
                            <Flex 
                                alignItems='end'
                            >      
                                <Flex 
                                    alignItems='center'
                                >
                                    <Circle 
                                        mt={1}
                                        mb={1}
                                        mr={2}
                                        size={10} 
                                        bg='green.400'
                                        border={'2px solid black'}
                                    />
                                    <Text mr={5}>
                                        Education
                                    </Text>
                                </Flex>
                                <Flex 
                                    alignItems='center'
                                >
                                    <Circle 
                                        mt={1}
                                        mb={1}
                                        mr={2}
                                        size={10} 
                                        bg='blue.400'
                                        border={'2px solid black'}
                                    />
                                    <Text mr={5}>
                                        Experience
                                    </Text>
                                </Flex>
                                <Flex 
                                    alignItems='center'
                                >
                                    <Circle 
                                        mt={1}
                                        mb={1}
                                        mr={2}
                                        size={10} 
                                        bgGradient='linear(to-r, green.400 50%, blue.400 50%)'
                                        border={'2px solid black'}
                                    />
                                    <Text mr={5}>
                                        Education & Experience
                                    </Text>
                                </Flex>
                            </Flex>  
                        </Text>
                    </Flex>
                </Flex>
                <Divider 
                    borderColor='gray.400' mb={12} 
                />
                <Box
                    display = {{base: 'none', md:'block'}}
                >
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
                            circleColor='green.400'
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
                            circleColor='green.400'
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
                            circleColor='green.400'
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
                            circleColor='blue.400'
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
                        <Box/>
                        <TimeElement
                            title={'Postdoctoral Research Fellow'}
                            degree={'Applied Physics'}
                            university={'Western Norway University of Applied Sciences'}
                            year={'present-01/2022'}
                            country={'Norway'}
                            circleColor='blue.400'
                            circlePositionX='40%'
                            circlePositionY='-49'
                            stretch='right'
                            period={400}
                            
                        />
                        <TimeElement
                            title={'Ph. D.'}
                            degree={'Particle Physics'}
                            university={'Institute of Nuclear Physics & University of Ferrara'}
                            year={'07/2021-10/2017'}
                            country={'Italy'}
                            thesis_link='https://islazykv.github.io/islazykv/pdfs/Ph.D.-Particle-Physics.pdf'
                            circleGradient='linear(to-r, green.400 50%, blue.400 50%)'
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
                            circleColor='blue.400'
                            circlePositionY='-49'
                            circlePositionX='30%'
                            stretch='right'
                            period={270}
                        />
                    </Grid>
                </Box>
                <Box
                    display = {{base: 'block', md:'none'}}
                >
                    <TimeElement
                        title={'B. Sc. Eng.'}
                        degree={'Civil Engineering'}
                        university={'Politechnika Krakowska'}
                        country={'Poland'}
                        year={'10/2011-02/2015'}
                        thesis_link='https://islazykv.github.io/islazykv/pdfs/B.Sc.Eng.-Civil-Engineering.pdf'
                    />
                    <TimeElement
                        title={'B. Sc. Eng.'}
                        degree={'Applied Physics'}
                        university={'Politechnika Krakowska'}
                        year={'10/2012-02/2016'}
                        country={'Poland'}
                        thesis_link='https://islazykv.github.io/islazykv/pdfs/B.Sc.Eng.-Applied-Physics.pdf'
                    />
                    <TimeElement
                        title={'M. Sc. Eng.'}
                        degree={'Applied Physics'}
                        university={'Politechnika Krakowska'}
                        year={'02/2016-05/2017'}
                        country={'Poland'}
                        thesis_link='https://islazykv.github.io/islazykv/pdfs/M.Sc.Eng.-Applied-Physics.pdf'
                    />
                    <TimeElement
                        title={'R&D Physics Intern'}
                        degree={'Camlin Group'}
                        university={''}
                        year={'04/2016-09/2016'}
                        country={'Switzerland'}
                    />
                    <TimeElement
                        title={'Software Developer'}
                        degree={'Freelance'}
                        university={''}
                        year={'09/2017-10/2016'}
                        country={'Poland'}
                    />
                    <TimeElement
                        title={'Ph. D.'}
                        degree={'Particle Physics'}
                        university={'Institute of Nuclear Physics & University of Ferrara'}
                        year={'07/2021-10/2017'}
                        country={'Italy'}
                        thesis_link='https://islazykv.github.io/islazykv/pdfs/Ph.D.-Particle-Physics.pdf'
                    />
                    <TimeElement
                        title={'Postdoctoral Research Fellow'}
                        degree={'Applied Physics'}
                        university={'Western Norway University of Applied Sciences'}
                        year={'present-01/2022'}
                        country={'Norway'}
                    />
                </Box>
            </Box>
        </Container>
    );
}