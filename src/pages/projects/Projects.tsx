import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    List,
    ListItem,
    chakra,
    Icon,
    border,
  } from '@chakra-ui/react';
  import { ArrowForwardIcon } from '@chakra-ui/icons';
  import { MdLocalShipping } from 'react-icons/md';
  
  import Carousel from "react-multi-carousel";
  import "react-multi-carousel/lib/styles.css";

  const projects = [
    { 
      image: './ATLAS.jpg',
      experiment: 'ATLAS Experiment',
      period: '2022-present',
      title: 'SUSY Tau+X Analysis',
      description: 'The aim of this analysis is to develop new search strategies for dark matter in the phase space of soft tau leptons. Although hard to work with due to their short lifetime, tau leptons might be a key in the hunt for dark matter. By introducing (semi)-supervised machine learning techniques on data obtained by the ATLAS detector at CERN, an unprecedented opportunity opens up where the mysteries of dark matter might be revealed.',
      responsibilities: ['Data analysis', 'Machine learning', 'COS'],
      images: ['./ecqa/1.jpg', './ecqa/2.jpg','./ecqa/3.jpg', './ecqa/4.jpg', './ecqa/5.jpg', './ecqa/6.png','./ecqa/7.jpg'],
    },
    {  
      image: './LHCb.jpeg',
      experiment: 'LHCb Experiment',
      period: '2017-2021',
      title: 'Elementary Cell Upgrade',
      description: 'The present thesis describes in detail the quality assurance of the photodetectors and related electronics (the so-called Elementary Cells) for the RICH (Ring-Imaging Cherenkov) detectors upgrade of the LHCb experiment, performed on-site at the University of Ferrara. The objective of this thesis is the detailed discussion of the complete quality assurance process, from the development of the experimental test setup together with its software used for acquisition and analysis of measurement data, to the description of actual tests performed on the Elementary Cells and their results.',
      responsibilities: [
        'Researches related to high energy and particle physics in the LHCb experiment, specifically the LHCb RICH detector upgrade',
        'Development of the test setup for quality control of the Elementary Cells', 
        'Software development of the automated software for the Elementary Cells quality assurance',
        'Hardware testing and assembly of the Elementary Cells',
        'Quality control measurements of the Elementary Cells',
        'Data analysis of the Elementary Cells quality assurance',
        'Data analysis of the DECAYS '
      ],
      images: ['./ecqa/1.jpg', './ecqa/2.jpg', './ecqa/3.jpg', './ecqa/4.jpg',],
    }
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }


  export const Projects = () => {
    const myClass={
      border:'2px solid green'
    }
    return (
      <Container maxW={'container.xl'} id='Projects' border='2px solid red'>
        <chakra.h1 fontSize="3xl" fontWeight="700">
            Projects
        </chakra.h1>

      {projects.map((project, i) => 
        (<>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
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
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '3xl' }}>
                  {project.experiment}
                </Heading>
                <Text
                  // color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'2xl'}>
                  {project.period}
                </Text>
              </Box>
    
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={
                  <StackDivider
                    // borderColor={useColorModeValue('gray.200', 'gray.600')}
                  />
                }>
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    // color={useColorModeValue('gray.500', 'gray.400')}
                    fontSize={'2xl'}
                    fontWeight={'300'}>
                    {project.title}
                  </Text>
                  <Text 
                    fontSize={'lg'} 
                    textAlign = 'justify'
                  >
                    {project.description}
                  </Text>
                </VStack>
              </Stack>
            </Stack>
          </SimpleGrid>

          <Flex>
            <Box>

              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                // color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Responsibilities
              </Text>

              <Box>
                {project.responsibilities.map((responsibility, i) => (
                  <Flex key={i}>
                    <Box color={'green.400'} px={2}>
                      <Icon as={ArrowForwardIcon} />
                    </Box>
                    <Text>
                    {responsibility}
                    </Text>
                  </Flex>
                ))}
              </Box>

              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  // color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                >
                  Gallery
                </Text>

                <Box
                  border='2px solid green'
                  maxW='container.xl'
                  ml={-4}
                >
                  <Carousel
                    ssr
                    partialVisbile
                    itemClass="image-item"
                    responsive={responsive}
                    // slidesToSlide={5}
                    infinite={true}
                    focusOnSelect={true}
                  >
                    {project.images.map((image, i) => (
                    <Image
                      key={i}
                      rounded={'md'}
                      // alt={'product image'}
                      src={image}
                      objectFit='cover'
                      style={{ width: "400px", height: "400px" }}
                      // h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                    ))}
                  </Carousel>
                </Box>
              </Box>

          
            </Box>
          </Flex>

          </>
        ))}


      </Container>
    );
  }