import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Link,
  chakra,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';


const publications = [
  {  
    authors: 'R. Calabrese, I. Slazyk et al',
    title: 'Performance of the LHCb RICH detectors during LHC Run 2',
    journal: 'JINST 17 (2022) 07, P07013',
    year: '2022',
    link: 'https://arxiv.org/abs/2205.13400'
  },
  {  
    authors: 'M. Andreotti, I. Slazyk et al.',
    title: 'Characterisation of signal-induced noise in Hamamatsu R11265 Multianode Photomultiplier Tubes',
    journal: 'JINST 16 (2021) 11, P11030, JINST 16',
    year: '2021',
    link: 'https://arxiv.org/abs/2110.00831'
  }
]

const publicationsLHCb = [
  {  
    authors: 'R. Aaij, I. Slazyk et al',
    title: 'Test of lepton universality in beauty-quark decays',
    journal: 'Nature Phys. 18',
    year: '2021',
    link: 'https://arxiv.org/abs/2103.11769'
  },
  {  
    authors: 'R. Aaij, I. Slazyk et al.',
    title: 'Observation of an exotic narrow doubly charmed tetraquark',
    journal: 'Nature Phys. 18 (2022) 7, 751-754, Nature Phys.',
    year: '2022',
    link: 'https://arxiv.org/abs/2109.01038'
  }
]

export const Publications = () => {
  return (
    <Container maxWidth='container.xl' id='Publications' border='2px solid purple' mb={20}>
      <Box p={4}>

          <Heading 
            fontSize={'3xl'}
            mt={5}
          >
            Publications
          </Heading>

          <Text mt={10} color={'gray.600'} fontSize={'xl'}>
            Relevant publications:
          </Text>

        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10}>
            {publications.map((publication, i) => (
              <HStack key={i} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={ArrowForwardIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text 
                  as={Link}
                  target={'_blank'}
                  href={publication.link}
                  fontWeight={600}
                  >{publication.authors}, {publication.title}, {publication.journal}, {publication.year}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>

        <Text mt={10} color={'gray.600'} fontSize={'xl'}>
          LHCb publications:
        </Text>

        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10}>
            {publicationsLHCb.map((publication, i) => (
              <HStack key={i} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={ArrowForwardIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text 
                  as={Link}
                  target={'_blank'}
                  href={publication.link}
                  fontWeight={600}
                  >{publication.authors}, {publication.title}, {publication.journal}, {publication.year}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>



      </Box>
    </Container>
  );
}