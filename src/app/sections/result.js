import { 
    Show,
    Box,
    Heading,
    Grid,
    GridItem,
    Text,
    List,
    Button,
    Flex,
    Image,
  } from "@chakra-ui/react"


    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { fal, fab, fas } from '@awesome.me/kit-b9fe25a16e/icons'

    import { useState } from "react"

export default function Intro(props) {

    const [open, setOpen] = useState(false)
    const [openAdvice, setOpenAdvice] = useState(false)

    const [overFacebook, setOverFacebook] = useState(false);
    const [overWhatsApp, setOverWhatsApp] = useState(false);
    const [overTwitter, setOverTwitter] = useState(false);

    function openDescription() {
        setOpen(!open);
    }

    function openAdviceSwitch() {
        setOpenAdvice(!openAdvice);
    }
    
    return (
        <>
            <Show when={(props.sectionNumber == props.sectionLength) && (props.result.key == props.value)}>
                <Box
                    position="relative"
                    w={{ base: "390px", md: "800px" }}
                    maxW="100vw"
                    h={{ base: "736px", md: "600px" }}
                    borderRadius={10}
                    mx="auto"
                    overflow="hidden"
                    key={props.key}
                >
                    <Box 
                        w={{ base: "390px", md: "800px" }}
                        maxW="100vw"
                        h={{ base: "736px", md: "600px" }}
                        py={16}
                        px={{ base: 6, md: 12 }}
                        bgColor="#0E1661"
                        borderRadius={10}
                        display="flex"
                        position='relative'
                        overflow="hidden"
                    >

                        <Image
                            src={props.image}
                            position="absolute"
                            left="50%"
                            bottom={0}
                            transform="translateX(-50%)"
                            w={{base: "100%", md: "50%"}}
                        />
                        <Grid
                            templateRows="auto 1fr"
                            templateColumns={{base:"60% auto", md:"75% auto"}}
                            gap="1.25rem"
                            w="100%"
                            zIndex={0}
                        >
                            <GridItem
                                colSpan={{base:2, md:1}}
                            >
                                <Text 
                                size="lg"
                                fontWeight="700"
                                color="white">
                                    You are the
                                </Text>
                                <Heading 
                                as="h3"
                                size={{ base: "3xl", md: "5xl" }}
                                pb={5}
                                fontWeight="700"
                                color="white">
                                    {props.title}
                                </Heading>
                            </GridItem>
                            <GridItem
                                rowSpan={{base:1, md:2}}
                                colStart={2}
                            >
                                <Flex
                                    flexDirection="column"
                                    alignItems="flex-end"
                                    gap={8}
                                >
                                    <Button
                                    borderRadius={{base:"0px", md:"16px"}}
                                    h={{base:"auto", md:"158px"}}
                                    w={{base:"auto", md:"158px"}}
                                    fontWeight="500"
                                    bg={{base:"none", md:'linear-gradient(90deg, #0F62F4 0%, #09398E 100%)'}}
                                    border={{base:"0px", md:'1px solid white'}}
                                    px={0}
                                    onClick={openAdviceSwitch}
                                    >
                                        <Flex
                                            bgColor={{base:"transparent", md:"white"}}
                                            borderRadius={{base:"0px", md:"12px"}}
                                            h={{base:"auto", md:"calc(100% - 5px)"}}
                                            w={{base:"auto", md:"calc(100% - 5px)"}}
                                            flexDirection="column"
                                            alignItems='center'
                                            justifyContent='center'
                                            gap={3}
                                            position="relative"
                                            transition="background-color .3s"
                                            _hover={{
                                                bgColor:"#F3F7FF"
                                            }}
                                        >
                                            <Box
                                                position="absolute"
                                                top={2}
                                                right={2}
                                                display={{base: "none", md:"block"}}
                                            >
                                                <FontAwesomeIcon icon={fas.faUpRightAndDownLeftFromCenter} />
                                            </Box>
                                            <Image 
                                                src="https://fractl.zavamed.com/campaign-zavacalculator/assets/images/information.svg"
                                                w={{base:"50px", md:"auto"}}
                                            />
                                            <Text
                                                color={{base: "white", md:"#0E1661"}}
                                            >
                                                Advice & Help
                                            </Text>
                                        </Flex>
                                    </Button>
                                    <Flex
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        gap={5}
                                    >
                                        <Button
                                            bgColor="transparent"
                                            h="auto"
                                            w="fit-content"
                                            onClick={props.resetButton}
                                        >
                                            <Flex
                                                flexDirection="column"
                                                alignItems="center"
                                                justifyContent="center"
                                                color="white"
                                            >
                                                <Image 
                                                    src="https://fractl.zavamed.com/campaign-zavacalculator/assets/images/repeat.svg"
                                                    transition='transform .3s'
                                                    _hover={{
                                                        transform:'rotate(360deg)'
                                                    }}
                                                />
                                                <Text
                                                    fontSize="xs"
                                                >Retake</Text>
                                            </Flex>
                                        </Button>
                                        <Flex
                                            bgColor="white"
                                            p={2}
                                            borderRadius="20px"
                                            flexDirection="column"
                                            gap={3}
                                            w="max-content"
                                        >
                                            <a 
                                                href={"https://wa.me/?text=" + props.socialDescription + "%20" + props.socialUrl}
                                                target="_blank"
                                                className="fa-layers fa-fw fa-md"
                                                onMouseOver={() => setOverWhatsApp(true)}
                                                onMouseLeave={() => setOverWhatsApp(false)}
                                            >
                                                <FontAwesomeIcon icon={fas.faCircle} transform="grow-6" style={overWhatsApp ? { color: "#CFEBED" } : { color: "#0E9CA5"}}/>
                                                <FontAwesomeIcon icon={fab.faWhatsapp} transform="shrink-1" style={overWhatsApp ? { color: "#0E9CA5" } : { color: "#fff"}} />
                                            </a>
                                            <a 
                                                href={"https://www.facebook.com/sharer/sharer.php?u=" + props.socialUrl}
                                                target="_blank"
                                                className="fa-layers fa-fw fa-md"
                                                onMouseOver={() => setOverFacebook(true)}
                                                onMouseLeave={() => setOverFacebook(false)}
                                            >
                                                <FontAwesomeIcon icon={fas.faCircle} transform="grow-6" style={overFacebook ? { color: "#CFEBED" } : { color: "#0E9CA5"}}/>
                                                <FontAwesomeIcon icon={fab.faFacebookF} transform="shrink-1" style={overFacebook ? { color: "#0E9CA5" } : { color: "#fff"}} />
                                            </a>
                                            <a 
                                                href={"https://twitter.com/intent/tweet?url=" + props.socialUrl + '&text=' + props.socialDescription}
                                                target="_blank"
                                                className="fa-layers fa-fw fa-md"
                                                onMouseOver={() => setOverTwitter(true)}
                                                onMouseLeave={() => setOverTwitter(false)}
                                            >
                                                <FontAwesomeIcon icon={fas.faCircle} transform="grow-6" style={overTwitter ? { color: "#CFEBED" } : { color: "#0E9CA5"}}/>
                                                <FontAwesomeIcon icon={fab.faXTwitter} transform="shrink-1" style={overTwitter ? { color: "#0E9CA5" } : { color: "#fff"}} />
                                            </a>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </GridItem>
                            <GridItem
                                colStart={1}
                                rowStart={2}
                            >
                                <Text
                                    fontWeight="bold"
                                    color="white"
                                >
                                    Top Causes
                                </Text>
                                <List.Root
                                    listStyle="none"
                                >
                                    {props.causes
                                        .map(cause => 
                                            <List.Item key={cause.no} color="white">{cause.title}</List.Item>
                                    )}
                                </List.Root>
                            </GridItem>
                        </Grid>
                        <Button
                            borderRadius="50px"
                            h="56px"
                            minW="174px"
                            fontWeight="500"
                            bg= 'linear-gradient(90deg, #0F62F4 0%, #09398E 100%)'
                            border='1px solid white'
                            px={0}
                            position="absolute"
                            bottom={10}
                            left="50%"
                            transform="translateX(-50%)"
                            onClick={openDescription}
                            >
                            <Flex
                                bgColor="white"
                                borderRadius='20px'
                                h="calc(100% - 10px)"
                                w="calc(100% - 10px)"
                                alignItems='center'
                                justifyContent='flex-end'
                                pr={2}
                                gap={3}
                                transition="background-color .3s"
                                _hover={{
                                    bgColor:"#F3F7FF"
                                }}
                            >
                                <Box
                                    w="auto"
                                    position="absolute"
                                    top="-3px"
                                    left="50%"
                                    transform="translateX(-50%)"
                                >
                                    <FontAwesomeIcon icon={fas.faChevronUp} inverse transform="grow-8"/>
                                </Box>
                                <Text
                                    fontSize="md"
                                    color="#0E1661"
                                >
                                    Reveal more
                                </Text>
                                <Image 
                                    src="https://fractl.zavamed.com/campaign-zavacalculator/assets/images/hamburger.svg"
                                />
                            </Flex>
                        </Button>
                    </Box>
                    <Box
                        bgColor="white"
                        h="100%"
                        w="100%"
                        position="absolute"
                        top={0}
                        py={16}
                        px={{ base: 6, md: 12 }}
                        color="#0E1661"
                        transform={open ? "translateY(0)" : "translateY(100%)"}
                        transition="transform 0.3s"
                    >
                        <Button
                            color="#0E1661"
                            w="auto"
                            h="auto"
                            p={2}
                            height="64px"
                            width="64px"
                            fontSize="64px"
                            position="absolute"
                            top={5}
                            right={5}
                            onClick={openDescription}
                            bgColor="white"
                            borderRadius="50%"
                            _hover={{
                                bgColor:"#F3F7FF"
                            }}
                        >
                            <FontAwesomeIcon icon={fal.faXmark} transform="grow-6"/>
                        </Button>
                        <Text>{props.title}</Text>
                        <Heading
                            fontSize={{ base: "2xl", md:"4xl"}}
                            color="#0E1661"
                            pb={16}
                            pt={{ base: 2, md:4}}
                        >
                            About Your Persona
                        </Heading>
                        {props.content
                            .map(c => 
                                <Text key={c.no} pb={4}>{c.paragraph}</Text>
                        )}
                    </Box>
                    <Box
                        bgColor="white"
                        h="100%"
                        w="100%"
                        position="absolute"
                        top={0}
                        py={16}
                        px={{ base: 6, md: 12 }}
                        color="black"
                        transform={openAdvice ? "translateX(0)" : "translateX(100%)"}
                        transition="transform 0.3s"
                    >
                        <Button
                            color="#0E1661"
                            w="auto"
                            h="auto"
                            p={2}
                            height="64px"
                            width="64px"
                            fontSize="64px"
                            position="absolute"
                            top={5}
                            right={5}
                            onClick={openAdviceSwitch}
                            bgColor="white"
                            borderRadius="50%"
                            _hover={{
                                bgColor:"#F3F7FF"
                            }}
                        >
                            <FontAwesomeIcon icon={fal.faXmark} transform="grow-6"/>
                        </Button>
                        <Flex gap={4}>
                            <Image 
                                src="https://fractl.zavamed.com/campaign-zavacalculator/assets/images/info-alt.svg"
                                w={{base:"50px", md:"80px"}}
                                fit="contain"
                                h={{base:"50px", md:"80px"}}
                            />
                            <Box>
                                <Text>{props.title}</Text>
                                <Heading
                                    fontSize={{ base: "2xl", md:"4xl"}}
                                    color="#0E1661"
                                    pb={16}
                                    pt={{ base: 2, md:4}}
                                >
                                    Help & Advice
                                </Heading>
                            </Box>
                        </Flex>
                        <Box
                            maxH="250px"
                            overflowY="auto"
                        >
                            {props.advice
                                .map(c => 
                                    <Text
                                        key={c.no}
                                        pb={4}
                                        color="#0E1661">
                                        {c.paragraph}
                                    </Text>
                            )}
                        </Box>
                        <Box pt={4}>
                            <Text
                                fontWeight="700"
                                color="#0E1661"
                            >
                                Your Go-To Cravings
                            </Text>
                            <Text
                                color="#0E1661"
                            >
                                Click on the foods below to see healthy alternatives to popular cravings
                            </Text>
                            <Flex
                                gap={12}
                                pt={4}
                            >
                            {props.cravings
                                .map(c => {
                                    const [openLightBox, setOpenLightBox] = useState(false)

                                    function lightBox() {
                                        setOpenLightBox(!openLightBox)
                                    }
                                    
                                    return(
                                        <>
                                        <Flex
                                            flexDirection="column"
                                            alignItems="center"
                                            gap={2}
                                            key={c.no}
                                        >
                                            <Box
                                                position="relative"
                                                cursor="pointer"
                                                _before={
                                                    {
                                                        content: "''",
                                                        borderRadius:"50%",
                                                        position:"absolute",
                                                        w:"calc(100% + 10px)",
                                                        h:"calc(100% + 10px)",
                                                        border:"2px solid #0F62F4",
                                                        top:"50%",
                                                        left:"50%",
                                                        transform:"translate(-50%, -50%)",
                                                        transition: "border .3s"
                                                    }
                                                }
                                                _hover={
                                                    {
                                                        _before:{
                                                            border:"4px solid #0F62F4"
                                                        }
                                                    }
                                                }
                                                onClick={lightBox}
                                            >
                                                <Image 
                                                    src={c.icon} 
                                                    alt={c.title} />
                                            </Box>
                                            <Text
                                                fontSize='sm'
                                                color="#0E1661"
                                            >
                                                {c.title}
                                            </Text>
                                        </Flex>
                                        <Box
                                            bgColor="rgba(14, 22, 97, 0.5)"
                                            position="absolute"
                                            top={0}
                                            left={0}
                                            right={0}
                                            bottom={0}
                                            zIndex={10}
                                            visibility={openLightBox ? "visible" : "hidden"}
                                            opacity={openLightBox ? "1" : "0"}
                                        >
                                            <Box
                                                bgColor="white"
                                                position="absolute"
                                                borderRadius={8}
                                                top="50%"
                                                left="50%"
                                                transform="translate(-50%, -50%)"
                                                w={{ base: "90vw", md:"480px"}}
                                                overflow="hidden"
                                            >
                                                <Box>
                                                    <Image
                                                        src={c.image}
                                                        alt={c.lightboxTitle}
                                                        w="100%"
                                                    />

                                                    <Button
                                                        color="#ADB5BD"
                                                        w="auto"
                                                        h="auto"
                                                        p={0}
                                                        fontSize="64px"
                                                        position="absolute"
                                                        top={-1}
                                                        right={2}
                                                        onClick={lightBox}
                                                        bgColor="transparent"
                                                    >
                                                        <FontAwesomeIcon icon={fal.faXmark} transform="grow-6"/>
                                                    </Button>
                                                    <Box
                                                        p={6}
                                                    >
                                                        <Text
                                                            fontWeight="700"
                                                            color="#0E1661"
                                                            pb={4}>
                                                                {c.lightboxTitle}
                                                        </Text>
                                                        <Text
                                                            color="#0E1661">
                                                                {c.description}
                                                        </Text>
                                                    </Box>
                                                </Box>
                                            </Box>

                                        </Box>
                                        </>
                                    )}
                                )}
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Show>
        </>
    )
}