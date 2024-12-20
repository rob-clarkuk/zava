import { 
    Heading,
    Box,
    Text,
    Button,
    Show,
    Flex,
    Stack,
} from "@chakra-ui/react"

import {
    RadioCardItem,
    RadioCardLabel,
    RadioCardRoot,
} from "@/components/ui/radio-card"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fal } from '@awesome.me/kit-b9fe25a16e/icons'

export default function Gender(props) {
    return (
        <>
            <Show when={props.sectionNumber == 1}>
                <Box 
                    w={{ base: "390px", md: "800px" }}
                    maxW="100vw"
                    h={{ base: "736px", md: "600px" }}
                    py={12}
                    px={{ base: 6, md: 12 }}
                    mx="auto"
                    bgColor="#fff"
                    borderRadius={10}
                    position='relative'
                    overflow="hidden"
                    >
                        <Flex
                        flexDirection="column"
                        justifyContent="space-between"
                        h="100%"
                    >
                        <Box>
                        <Flex
                            alignItems="center"
                            gap={3}
                        >
                            <Button
                                borderRadius="8px"
                                bg= '#E9F1FE'
                                border='1px solid white'
                                px={0}
                                color="#0E1661"
                                onClick={props.previousClickEvent}
                                _hover={
                                    {
                                        border:'1px solid #0F62F4'
                                    }
                                }
                            >
                                <FontAwesomeIcon icon={fal.faChevronLeft}/>
                            </Button>
                            <Text
                            fontSize="xl"
                            color="#0E1661"
                            >
                             {props.subTitle}
                            </Text>
                        </Flex>
                        <Heading
                            as="h2"
                            fontSize={{ base: "2xl", md: "4xl" }}
                            color="#0E1661"
                            fontWeight="700"
                            pb={8}
                            pt={5}
                        >
                            {props.title}
                        </Heading>
                        <RadioCardRoot
                            defaultValue="next"
                            size={{ base: "sm", md: "md" }}
                            colorPalette="blue"
                            onChange={(value) => {
                                props.genderChoice(value.target.value, false);
                            }}
                        >
                            <RadioCardLabel
                                color="#0E1661"
                                fontSize="lg"
                                fontWeight="700"
                                pb={5}
                            >
                                {props.question}
                            </RadioCardLabel>
                            <Stack
                            gap={4}
                            >
                            <RadioCardItem
                                indicatorPlacement="start"
                                label="Female"
                                value="female"
                                border="2px solid #F3F7FF"
                                bg="#F3F7FF"
                                borderRadius="8px"
                                color="#0E1661"
                                _hover={{ 
                                borderColor: '#0F62F4'
                                }}
                                _checked={{ 
                                borderColor: '#0F62F4'
                                }}
                            />
                            <RadioCardItem
                                indicatorPlacement="start"
                                label="Male"
                                value="male"
                                border="2px solid #F3F7FF"
                                bg="#F3F7FF"
                                borderRadius="8px"
                                color="#0E1661"
                                _hover={{ 
                                borderColor: '#0F62F4'
                                }}
                                _checked={{ 
                                borderColor: '#0F62F4'
                                }}
                            />
                            <RadioCardItem
                                indicatorPlacement="start"
                                label="Prefer not to say"
                                value="neither"
                                border="2px solid #F3F7FF"
                                bg="#F3F7FF"
                                borderRadius="8px"
                                color="#0E1661"
                                _hover={{ 
                                    borderColor: '#0F62F4'
                                }}
                                _checked={{ 
                                    borderColor: '#0F62F4'
                                }}
                            />
                            </Stack>
                        </RadioCardRoot>
                        </Box>
                        <Button
                            w={{ base: "100%", md: "350px" }}
                            h="40px"
                            bg="#0F62F4"
                            borderRadius="8px"
                            color="#fff"
                            alignSelf="flex-end"
                            disabled={props.buttonState}
                            _disabled={{ 
                                bgColor: '#B3B1B1',
                                color: '#777676',
                                opacity: 1
                            }}
                            _hover={{
                                bgColor:'#3232E1'
                            }}
                            onClick={props.clickEvent}
                            >
                            { props.buttonTitle }
                        </Button>
                    </Flex>
                </Box>
            </Show>
        </>
    )
} 