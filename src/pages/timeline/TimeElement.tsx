import {
    Text,
    Box,
    Button,
    chakra,
    GridItem,
    Circle,
    Link,
  } from '@chakra-ui/react';


type FeatureProps = {
    title?: string;
    degree?: string;
    university?: string;
    country?: string;
    year?: string;
    thesis_link?: string;
    enableMargin?: boolean,
    enableRadius?: boolean;
    enableArrow?: boolean;
    circleColor?: string;
    circleGradient?: string;
    circlePositionX?: string;
    circlePositionY?: string;
    stretch?: 'left' | 'right'
    period?: number;
  }
  
  
  export const TimeElement = 
    ({  title, 
        degree, 
        university, 
        country, 
        year, 
        thesis_link, 
        enableMargin, 
        enableRadius, 
        enableArrow, 
        circleColor, 
        circleGradient, 
        circlePositionX, 
        circlePositionY, 
        stretch, 
        period 
    }: FeatureProps) => {
    return (
        <GridItem
            position='relative' 
            pb={10}
            borderTop={enableMargin?'5px solid green':'none'}
            borderBottom={enableMargin?'5px solid green':'none'}
            borderRight={enableRadius?'5px solid green':'none'} 
            borderRightRadius={enableRadius?50:0}
            _hover={{
                '.ClassCircle': {bg:'blue.400', width:period}, 
                '.ClassText':{opacity:1},
                '.ClassBoxShadow':{boxShadow:'-2px 1px 55px -11px rgba(237,6,6,0.75)', bg:'red.50'}
            }}
        >

            <Circle 
                position='absolute'
                zIndex={3}
                size={10}
                top={circlePositionY} 
                left={stretch==='left'?circlePositionX:'none'} 
                right={stretch==='right'?circlePositionX:'none'} 
                bg={circleColor}
                bgGradient={circleGradient}
                display={circlePositionY===''?'none':'flex'}
            >
            </Circle>

            <Circle 
                className='ClassCircle'
                position='absolute' 
                zIndex={2}
                size={4}
                transition='1s all'
                top={circlePositionY==='-6'?'-3':'-9'} 
                left={stretch==='left'?circlePositionX:'none'} 
                right={stretch==='right'?circlePositionX:'none'} 
                bg={circleColor}
                display={circlePositionY===''?'none':'flex'}
            >
            </Circle>

            <Text 
                className='ClassText'
                position='absolute' 
                mt={-5}
                opacity={0}
                transition='all 1s'
                ml={stretch==='left'?10:'none'} 
                mr={stretch==='right'?10:'none'} 
                top={circlePositionY} 
                left={stretch==='left'?circlePositionX:'none'} 
                right={stretch==='right'?circlePositionX:'none'} 
                display={circlePositionY===''?'none':'flex'}
            >
                {year}
            </Text>

            <Box 
                position='absolute' 
                bottom={-6} 
                left={-3}
                display={enableArrow?'flex':'none'}
                style={{
                    width: 0,
                    height: 0,
                    borderTop: '20px solid transparent',
                    borderBottom: '20px solid transparent',
                    borderRight:'50px solid green'
                }}
            />

            <Box
                className='ClassBoxShadow'
                px={2}
                pb={2}
                mt={10}
                textAlign='center'
                transition='all 1s'
            >
                <chakra.h3 fontSize="xl" fontWeight="600" textAlign='center'>
                    {title}
                </chakra.h3>

                <chakra.p textAlign='center' fontWeight="500">
                    {degree}
                </chakra.p>

                <chakra.p textAlign='center'>
                    {university}
                </chakra.p>

                <chakra.p textAlign='center'>
                    {country}
                </chakra.p>

                {thesis_link && 
                    <Button 
                        as={Link}
                        size="md" 
                        mt='2'
                        colorScheme="green" 
                        target="_blank" 
                        href={thesis_link}
                    >
                        Thesis
                    </Button>
                }
            </Box>
        </GridItem>
    );
  };