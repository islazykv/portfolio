import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { MathJax, MathJaxContext } from 'better-react-mathjax';


const projects = [
  { 
    image: './ATLAS.jpg',
    experiment: 'ATLAS Experiment',
    period: '2022-present',
    title: 'Tau Lepton Analysis',
    description: 'My current project involves the development of new search strategies for dark matter at the ATLAS experiment. The phase space of interest covers extremely difficult region to work with which is the tau lepton sector. Tau leptons are extremely interesting elementary particles which might help in the hunt for dark matter. However, at the same time they are exceptionally difficult to work with due to their short lifetime. My work includes the development of supervised and semisupervised machine learning methods in the mentioned sector to look for dark matter candidates.',
    responsibilities: [
      'Researches related to particle and high energy physics at the ATLAS experiment, specifically to dark matter searches,',
      'Data analysis of tau lepton in simplified models of squark and gluino pairs',
      'Development and implementation of machine learning and deep learning techniques,',
      'Study of interpretability, explainability and robustness of machine learning methods,',
      'Software development of the ATLAS framework.',
    ]
  },
  {  
    image: './LHCb.jpeg',
    experiment: 'LHCb Experiment',
    period: '2017-2021',
    title: 'Ring-Imaging Chernekov Detector Upgrade',
    description: 'The objective of this project concerned the quality assurance of the newly developed photodetectors and related electronics (Elementary Cells) for the LHCb Ring-Imaging Cherenkov detectors upgrade, which are used in the identification of charged particles in b- and c-hadron decays. My work included the study, development and execution of a complete quality assurance process: from the development of the experimental test setup together with its software used for acquisition and analysis of measurement data, to the description of actual tests performed on the Elementary Cells and their results. If you are interested, please have a look at my Ph.D. thesis.',
    responsibilities: [
      'Researches related to particle and high energy physics at the LHCb experiment, specifically to the LHCb RICH detector upgrade,',
      'Development of the test setup for quality control of the Elementary Cells,', 
      'Software development of the automated software for the Elementary Cells quality assurance,',
      'Hardware testing and assembly of the Elementary Cells,',
      'Quality control measurements of the Elementary Cells,',
      'Data analysis of the Elementary Cells quality assurance,',
      `Data analysis of the ${"\\(B^{0}_{s} \\to D^{\\mp}_{s} K^{\\pm} \\)"} decays.`
    ]
  }
]


export const Projects = () => {
  return (
    <MathJaxContext>
      <Container 
        id='Projects' 
        maxWidth='container.xl' 
        mb={20}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', md: '4xl' }}
          fontFamily= 'Playfair Display'
          mb={10}
        >
          Projects
        </Heading>

        {projects.map((project, i) => 
          (
            <Box 
              border='1px solid'
              borderColor='gray.200'
              boxShadow='md'
              borderRadius='md'
              px={10}
              pt={10}
              my={2}
              mb={5}
            >
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                key={i}
              >
                <Flex>      
                  <Image
                    rounded={'md'}
                    alt={'product image'}
                    src={project.image}
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    h={{ base: '100%', sm: '200px', lg: '400px' }}
                  />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                  <Box as={'header'}>
                    <Heading
                      fontWeight={600}
                      fontSize={{ base: '2xl', sm: '4xl', lg: '3xl' }}
                      fontFamily= 'Playfair Display'
                    >
                      {project.experiment}
                    </Heading>
                    <Text
                      fontWeight={300}
                      fontSize={'2xl'}
                    >
                      {project.period}
                    </Text>
                  </Box>
                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={'column'}
                  >
                    <VStack 
                      spacing={{ base: 4, sm: 6 }}
                    >
                      <Text
                        fontSize={'2xl'}
                        fontWeight={'500'}
                        fontFamily= {'Playfair Display'}
                      >
                        {project.title}
                      </Text>
                      <Text 
                        textAlign={'justify'}
                      >
                        {project.description}
                      </Text>
                    </VStack>
                  </Stack>
                </Stack>
              </SimpleGrid>
              <Flex
                py='20px'
              >
                <Box>
                  <Text
                    fontSize={'xl'}
                    fontWeight={'500'}
                    pb={'5'}
                    pl={'5'}
                  >
                    Responsibilities:
                  </Text>
                  <Box>
                    {project.responsibilities.map((responsibility, i) => (
                      <Flex 
                        key={i}
                      >
                        <Box 
                          color={'green.400'} 
                          px={5} 
                          pb={2}
                        >
                          <Icon as={ArrowForwardIcon}/>
                        </Box>
                        <Text>
                          <MathJax>
                            {responsibility}
                          </MathJax>
                        </Text>
                      </Flex>
                    ))}
                  </Box>
                </Box>
              </Flex>
            </Box>
          ))}
      </Container>
    </MathJaxContext>
  );
}