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
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { MathJax, MathJaxContext } from 'better-react-mathjax';


const publications = [
  {  
    authors: 'R. Calabrese, I. Slazyk et al.',
    title: `Performance of the LHCb RICH detectors during LHC Run 2`,
    journal: ' Journal of Instrumentation 17 P07013',
    year: '2022',
    link: 'https://arxiv.org/abs/2205.13400'
  },
  {  
    authors: 'M. Andreotti, I. Slazyk et al.',
    title: `Characterisation of signal-induced noise in Hamamatsu R11265 Multianode Photomultiplier Tubes`,
    journal: 'Journal of Instrumentation 16 P11030',
    year: '2021',
    link: 'https://arxiv.org/abs/2110.00831'
  }
]

const publicationsLHCb = [
  {  
    authors: 'R. Aaij, I. Slazyk et al., [LHCb Collaboration]',
    title: `Test of lepton universality in beauty-quark decays`,
    journal: 'Nature Physics 18 277–282',
    year: '2022',
    link: 'https://www.nature.com/articles/s41567-021-01478-8'
  },
  {  
    authors: 'R. Aaij, I. Slazyk et al., [LHCb Collaboration]',
    title: `Study of the doubly charmed tetraquark ${"\\(T_{cc}^{+}\\)"}`,
    journal: 'Nature Physics 13 3351',
    year: '2022',
    link: 'https://www.nature.com/articles/s41467-022-30206-w'
  },
  {  
    authors: 'R. Aaij, I. Slazyk et al., [LHCb Collaboration]',
    title: `Observation of an exotic narrow doubly charmed tetraquark`,
    journal: 'Nature Physics 18 751–754',
    year: '2022',
    link: 'https://www.nature.com/articles/s41567-022-01614-y'
  },
  {  
    authors: 'R. Aaij, I. Skiba et al., [LHCb Collaboration]',
    title: `Measurement of CP-averaged observables in the ${"\\(B^{0} \\to K^{*0} μ^{+} μ^{-} \\)"} decay`,
    journal: 'Physical Review Letter 125 011802',
    year: '2020',
    link: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.125.011802'
  },
  {  
    authors: 'R. Aaij, I. Skiba et al., [LHCb Collaboration]',
    title: `Observation of structure in the ${"\\(J /\\psi \\)"}-pair mass spectrum`,
    journal: 'Science Bulletin 65 1983-1993',
    year: '2020',
    link: 'https://www.sciencedirect.com/science/article/pii/S2095927320305685?via%3Dihub'
  },
  {  
    authors: 'R. Aaij, I. Skiba et al., [LHCb Collaboration]',
    title: `Search for lepton-universality violation in ${"\\(B^{+} \\to K^{+} l^{+} l^{-} \\)"} decays`,
    journal: 'Physical Review Letter 122 191801',
    year: '2019',
    link: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.122.191801'
  },
  {  
    authors: 'R. Aaij, I. Skiba et al., [LHCb Collaboration]',
    title: `Observation of CP Violation in Charm Decays`,
    journal: 'Physical Review Letter 122 211803',
    year: '2019',
    link: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.122.211803'
  },
  {  
    authors: 'R. Aaij, I. Skiba et al., [LHCb Collaboration]',
    title: `Observation of a narrow pentaquark state, ${"\\(P_{c}(4312)^{+} \\)"}, and of two-peak structure of the ${"\\(P_{c}(4450)^{+} \\)"}`,
    journal: 'Physical Review Letter 122 222001',
    year: '2019',
    link: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.122.222001'
  }
]


export const Publications = () => {
  return (
    <MathJaxContext>
      <Container 
        id='Publications' 
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
            Publications
          </Heading>
          <Text 
            mt={10} 
            color={'gray.600'} 
            fontSize={'xl'}
          >
            Ph.D. publications:
          </Text>
          <Box 
            mt={10}
          >
            <SimpleGrid 
              columns={{ base: 1, md: 1, lg: 1 }} 
              spacing={10}
            >
              {publications.map((publication, i) => (
                <HStack 
                  key={i} 
                  align={'top'}
                >
                  <Box 
                    color={'green.400'} 
                    px={2}
                  >
                    <Icon as={ArrowForwardIcon}/>
                  </Box>
                  <VStack 
                    align={'start'}
                  >
                    <MathJax>
                      <Text 
                        as={Link}
                        target={'_blank'}
                        href={publication.link}
                        fontWeight={600}
                      >
                        {publication.authors}, {publication.title}, {publication.journal}, {publication.year}.
                      </Text>
                    </MathJax>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </Box>
          <Text 
            mt={10} 
            color={'gray.600'} 
            fontSize={'xl'}
          >
            CERN LHCb publications:
          </Text>
          <Box
            mt={10}
          >
            <SimpleGrid 
              columns={{ base: 1, md: 1, lg: 1 }} 
              spacing={10}
            >
              {publicationsLHCb.map((publication, i) => (
                <HStack 
                  key={i} 
                  align={'top'}
                >
                  <Box 
                    color={'green.400'} 
                    px={2}
                  >
                    <Icon as={ArrowForwardIcon}/>
                  </Box>
                  <VStack 
                    align={'start'}
                  >
                    <MathJax>
                      <Text 
                        as={Link}
                        target={'_blank'}
                        href={publication.link}
                        fontWeight={600}
                      >
                        {publication.authors}, {publication.title}, {publication.journal}, {publication.year}.
                      </Text>
                    </MathJax>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </MathJaxContext>
  );
}