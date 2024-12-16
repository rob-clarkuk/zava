import { 
    Heading,
    Box,
    Text,
    Button,
    Show,
    Flex,
    Image,
  } from "@chakra-ui/react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fal, fas } from '@awesome.me/kit-b9fe25a16e/icons'

export default function Intro(props) {
    return (
        <>
            <Show when={props.sectionNumber == 0}>
                <Box 
                    w={{ base: "390px", md: "800px" }}
                    maxW="100vw"
                    h={{ base: "665px", md: "600px" }}
                    py={16}
                    px={{ base: 6, md: 12 }}
                    bgColor="#0E1661"
                    borderRadius={10}
                    display="flex"
                    alignItems="flex-end"
                    position='relative'
                    bgImage='url(./dripping2.png)'
                    bgRepeat='no-repeat'
                    bgPos='top right'
                    bgSize={{ base: "80%", md: "60%" }}
                    overflow="hidden"
                    _before={
                        {
                        content: '""',
                        bgImage:'url(./bg.svg)',
                        bgRepeat:'no-repeat',
                        bgPos:'center',
                        bgSize:'auto',
                        position:'absolute',
                        top:0,
                        left:0,
                        right:0,
                        bottom:0,
                        opacity:'7%'
                        }
                    }
                >
                    <Image
                        display={{ base: "block", md: "none" }}
                        src="./ice-cream4-mob.png"
                        position="absolute"
                        right={{ base: '-20px', md: 0 }}
                        top={0}
                        w={{ base: "230px", md: "auto" }}
                    />
                    <Image
                        display={{ base: "none", md: "block" }}
                        src="./ice-cream4.png"
                        position="absolute"
                        right={{ base: '-20px', md: 0 }}
                        top={0}
                        w={{ base: "230px", md: "auto" }}
                    />
                    <Box
                        maxW="322px"
                    >
                        <Heading 
                        as="h1"
                        size={{ base: "3xl", md: "5xl" }}
                        pb={5}
                        fontWeight="700">
                        {props.title}
                        </Heading>
                        <Text
                        pb={5}
                        >
                        {props.intro}
                        </Text>
                        <Button
                        borderRadius="50px"
                        h="56px"
                        minW="128px"
                        fontWeight="500"
                        bg= 'linear-gradient(90deg, #0F62F4 0%, #09398E 100%)'
                        border='1px solid white'
                        px={0}
                        onClick={props.clickEvent}
                        >
                        <Flex
                            bgColor="white"
                            borderRadius='20px'
                            h="calc(100% - 10px)"
                            w="calc(100% - 10px)"
                            alignItems='center'
                            justifyContent='flex-end'
                            pr={3}
                            gap={3}
                        >
                            {props.buttonTitle}
                            <span className="fa-layers fa-fw fa-xl">
                            <FontAwesomeIcon icon={fas.faCircle} transform="grow-6" color="#0E9CA5"/>
                            <FontAwesomeIcon icon={fal.faArrowRight} transform="shrink-7" inverse />
                            </span>
                        </Flex>
                        </Button>
                    </Box>
                </Box>
            </Show>
        </>
    )
} 