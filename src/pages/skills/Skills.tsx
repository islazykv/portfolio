import {
    Container,
    Flex,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
  

const logos_processing = [
    { 
        src: 'Python-logo.png',
        alt: 'Python Logo',
        w: '150px',
        link: 'https://www.python.org/'
    },
    { 
        src: 'Numpy-logo.png',
        alt: 'Numpy Logo',
        w: '150px',
        link: 'https://numpy.org/'
    },
    { 
        src: 'Pandas-logo.png',
        alt: 'Pandas Logo',
        w: '150px',
        link: 'https://pandas.pydata.org/'
    },
    { 
        src: 'Scipy-logo.png',
        alt: 'SciPy Logo',
        w: '150px',
        link: 'https://scipy.org/'
    },
    { 
        srcLight: 'Root-logo-light.png',
        srcDark: 'Root-logo-dark.png',
        alt: 'ROOT Logo',
        w: '150px',
        link: 'https://root.cern/'
    },
    { 
        srcLight: 'Uproot-logo.png',
        srcDark: 'Uproot-logo.png',
        alt: 'UpROOT Logo',
        w: '150px',
        link: 'https://uproot.readthedocs.io/en/latest/'
    },
    { 
        srcLight: 'Awkward_Array-logo.png',
        srcDark: 'Awkward_Array-logo.png',
        alt: 'Awkward Array Logo',
        w: '150px',
        link: 'https://awkward-array.org/doc/main/'
    }
]

const logos_visualization = [
    { 
        src: 'Matplotlib-logo.png',
        alt: 'Matplotlib Logo',
        w: '150px',
        link: 'https://matplotlib.org/'
    },
    { 
        src: 'Seaborn-logo.png',
        alt: 'Seaborn Logo',
        w: '150px',
        link: 'https://seaborn.pydata.org/'
    },
    { 
        src: 'Plotly-logo.png',
        alt: 'Plotly Logo',
        w: '150px',
        link: 'https://plotly.com/'
    }
]

const logos_machine_learning = [
    { 
        src: 'Scikit_Learn-logo.png',
        alt: 'SciKit-Learn Logo',
        w: '150px',
        link: 'https://scikit-learn.org/stable/'
    },
    { 
        src: 'Tensorflow-logo.png',
        alt: 'Tensorflow Logo',
        w: '150px',
        link: 'https://www.tensorflow.org/'
    },
    { 
        src: 'Pytorch-logo.png',
        alt: 'Pytorch Logo',
        w: '150px',
        link: 'https://pytorch.org/'
    },
    { 
        src: 'Keras-logo.png',
        alt: 'Keras Logo',
        w: '150px',
        link: 'https://keras.io/'
    },
    { 
        src: 'XGBoost-logo.png',
        alt: 'XGBoost Logo',
        w: '150px',
        link: 'https://xgboost.readthedocs.io/en/stable/'
    }
]

const logos_web_development = [
    { 
        src: 'HTML-logo.png',
        alt: 'HTML Logo',
        w: '75px',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    { 
        src: 'CSS-logo.png',
        alt: 'CSS Logo',
        w: '75px',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },    
    { 
        src: 'JS-logo.png',
        alt: 'JS Logo',
        w: '75px',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },  
    { 
        src: 'Chakraui-logo.png',
        alt: 'ChakraUI Logo',
        w: '150px',
        link: 'https://chakra-ui.com/'
    },  
    { 
        src: 'React-logo.png',
        alt: 'React Logo',
        w: '150px',
        link: 'https://reactjs.org/'
    },  
    { 
        src: 'Fastapi-logo.png',
        alt: 'FastAPI Logo',
        w: '150px',
        link: 'https://fastapi.tiangolo.com/'
    }
]


export const Skills = () => {

    const mode = useColorModeValue('light', 'dark')

    return (
        <Container 
            id='Skills' 
            maxWidth='container.xl'
            mb={20}
        >
            <Stack  
                direction={{ base: 'column', md: 'row' }}
            >
                <Flex 
                    w='100%'
                >
                    <Stack 
                        w='100%'
                    >
                        <Heading 
                            fontWeight={600}
                            fontSize={{ base: '2xl', md: '4xl' }}
                            fontFamily= 'Playfair Display'
                            mb={5}
                        >
                            Skills
                        </Heading>
                        <Text 
                            fontSize={{ base: 'md', lg: 'lg' }} 
                            color={'gray.500'}
                            textAlign='justify'
                            pb={5}
                        >
                            During my career, I had a chance to tackle a lot of different domains. 
                            From hardware and software development of cutting-edge components used to identify the tiniest particles, 
                            to the study and exploration of common high energy physics problems through data analysis and data science.
                            Currently, I am implementing and developing modern machine learning techniques that could help us push the frontiers of our knowledge.
                            In order to achieve that, I am using the following state-of-the-art tools and technologies:
                        </Text>
                        <Stack 
                            direction={{ base: 'column', md: 'row' }} 
                            spacing={4} 
                            justifyContent='center'
                        >
                            <VStack 
                                spacing={14}
                            >
                                <VStack>
                                    <Text 
                                        fontWeight={600}
                                        fontSize={{ base: 'xl', md: '2xl' }}
                                        fontFamily= 'Playfair Display'
                                    >
                                        Data Processing
                                    </Text>
                                    <HStack
                                        spacing={10}
                                    >
                                        {logos_processing.slice(0,4).map((logo, i) =>
                                            <a href={logo.link} target="_blank">
                                                <Image
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    w={logo.w}
                                                />
                                            </a>
                                        )}
                                    </HStack>
                                    <HStack
                                        spacing={10}
                                    >
                                        {logos_processing.slice(4).map((logo, i) =>
                                            <a href={logo.link} target="_blank">
                                                <Image
                                                    src={mode=='light'?logo.srcLight : logo.srcDark}
                                                    alt={logo.alt}
                                                    w={logo.w}
                                                />
                                            </a>
                                        )}
                                    </HStack>
                                </VStack>
                                <VStack>
                                    <Text 
                                        fontWeight={600}
                                        fontSize={{ base: 'xl', md: '2xl' }}
                                        fontFamily= 'Playfair Display'
                                    >
                                        Data Visualization
                                    </Text>
                                    <HStack
                                        spacing={10}
                                    >
                                        {logos_visualization.map((logo, i) =>
                                            <a href={logo.link} target="_blank">
                                                <Image
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    w={logo.w}
                                                />
                                            </a>
                                        )}
                                    </HStack>
                                </VStack>
                                <VStack>
                                    <Text 
                                        fontWeight={600}
                                        fontSize={{ base: 'xl', md: '2xl' }}
                                        fontFamily= 'Playfair Display'
                                    >
                                        Machine Learning
                                    </Text>
                                    <HStack
                                        spacing={10}
                                    >
                                        {logos_machine_learning.map((logo, i) =>
                                            <a href={logo.link} target="_blank">
                                                <Image
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    w={logo.w}
                                                />
                                            </a>
                                        )}
                                    </HStack>
                                </VStack>
                                <VStack>
                                    <Text 
                                        fontWeight={600}
                                        fontSize={{ base: 'xl', md: '2xl' }}
                                        fontFamily= 'Playfair Display'
                                    >
                                        Web Development
                                    </Text>
                                    <HStack
                                        spacing={10}
                                    >
                                        {logos_web_development.slice(0,3).map((logo, i) =>
                                            <a href={logo.link} target="_blank">
                                                <Image
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    w={logo.w}
                                                />
                                            </a>
                                        )}
                                    </HStack>
                                    <HStack
                                        spacing={10}
                                    >
                                        {logos_web_development.slice(3).map((logo, i) =>
                                            <a href={logo.link} target="_blank">
                                                <Image
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    w={logo.w}
                                                />
                                            </a>
                                        )}
                                    </HStack>
                                </VStack>
                            </VStack>
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
        </Container>
    );
}