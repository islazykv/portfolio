import { FC, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

import { Menu } from './Menu';
type Props = {
    links: string[]
};

export const Navigation : FC<Props> = (props) => {
    const {links} = props
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true)

    useEffect(()=> {
      const handleScroll = () => {
         let moving = window.pageYOffset
         
         setVisible(position > moving);
         setPosition(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
         window.removeEventListener("scroll", handleScroll);
      })
    })

  return (
    <>
      <Box
      bg={useColorModeValue('gray.100', 'gray.900')} 
      px={4} position='sticky' 
      // top={0} 
      zIndex={5}
      top={ visible ? 0 : "-80px"}
      transition= 'top 0.4s ease-out'>

        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {links.map((link:string) => (
                <Menu key={link}>{link}</Menu>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
                <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>


      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
             <Stack as={'nav'} spacing={4}>
              {links.map((link:string) => (
                 <Menu key={link}>{link}</Menu>
               ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>



      </Box>
    </>
  );
}