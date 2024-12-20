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
    RadioCardRoot,
  } from "@/components/ui/radio-card"
  
  import {
    ProgressBar,
    ProgressRoot
  } from "@/components/ui/progress"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fal } from '@awesome.me/kit-b9fe25a16e/icons'

import { useState } from 'react'



export default function Question(props) {

    const [questionPersona, setQuestionPersona] = useState({
        disabled: true,
        value: '',
        selectedValue: ''
    });

    function questionSelect(val) {
        const newValue = val.target.value;
      
        setQuestionPersona(prevState => ({
          ...prevState,
          disabled: false,
          value: newValue
        }));
      }

    function questionComplete() {
        setQuestionPersona(prevState => ({
          ...prevState,
          disabled: true,
          selectedValue: prevState.value
        }));
    }

    function questionIncomplete() {
        setQuestionPersona(prevState => ({
          ...prevState,
          disabled: true,
          value: ''
        }));
    }

    return (
        <>
            <Show when={props.sectionNumber == props.sectionContainer}>
                <Box 
                    w={{ base: "390px", md: "800px" }}
                    maxW="100vw"
                    h={{ base: "736px", md: "600px" }}
                    py={6}
                    px={{ base: 6, md: 12 }}
                    mx="auto"
                    bgColor="#fff"
                    borderRadius={10}
                    position='relative'
                    overflow="hidden"
                >
                    <Box
                        position="absolute"
                        top="-4px"
                        left={0}
                        right={0}
                        zIndex={1}
                    >
                        <ProgressRoot
                        maxW="100%"
                        colorPalette="blue"
                        value={props.questionNo}
                        >
                        <ProgressBar bg="#B7D0FC"/>
                        </ProgressRoot>
                    </Box>
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
                                Question {props.questionNumber} out of {props.questionLength}
                                </Text>
                            </Flex>
                            <Heading
                                as="h2"
                                maxW={{ base: "80%", md:"70%"}}
                                lineHeight={1.2}
                                fontSize={{ base: "xl", md: "4xl" }}
                                color="#0E1661"
                                fontWeight="700"
                                pb={2}
                                pt={2}
                            >
                                {props.title}
                            </Heading>
                            <RadioCardRoot
                                defaultValue="next"
                                size="sm"
                                colorPalette="blue"
                                onChange={(value) => {
                                    questionSelect(value);
                                    props.lastEvent(value.target.value);
                                }}
                            >
                                <Stack
                                gap={2}
                                >
                                    {props.gender === "female"
                                        ? props.questions
                                            .map(question => 
                                                <RadioCardItem
                                                    key={question.no}
                                                    indicatorPlacement="start"
                                                    label={question.question}
                                                    value={question.value}
                                                    border="2px solid #F3F7FF"
                                                    bg="#F3F7FF"
                                                    borderRadius="8px"
                                                    color="#0E1661"
                                                    fontSize="sm"
                                                    _hover={{ 
                                                        borderColor: '#0F62F4'
                                                    }}
                                                    _checked={{ 
                                                        borderColor: '#0F62F4'
                                                    }}
                                                />
                                            )
                                        : props.questions
                                        .filter(question => {
                                            return question.femaleOnly === false;
                                        })
                                        .map(question => 
                                            <RadioCardItem
                                                key={question.no}
                                                indicatorPlacement="start"
                                                label={question.question}
                                                value={question.value}
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
                                        )
                                    }
                                </Stack>
                            </RadioCardRoot>
                            </Box>
                            { props.questionNumber > 1
                                ?  <Flex
                                        justifyContent="flex-end"
                                        gap={4}
                                        flexDirection={{ base: "column", md: "row" }}
                                    >
                                    <Button
                                        w={{ base: "100%", md: "215px" }}
                                        h="40px"
                                        bg="#ffffff"
                                        borderRadius="8px"
                                        color="#0E1661"
                                        border="2px solid #0F62F4"
                                        alignSelf="flex-end"
                                        _hover={{
                                            bgColor:'#3232E1',
                                            borderColor:'#3232E1',
                                            color:'white'
                                        }}
                                        onClick={() => {
                                            questionIncomplete();
                                            props.previousClickEvent(questionPersona.selectedValue);
                                        }}
                                    >
                                        Previous
                                    </Button>
                                    <Button
                                        w={{ base: "100%", md: "215px" }}
                                        h="40px"
                                        bg="#0F62F4"
                                        borderRadius="8px"
                                        color="white"
                                        alignSelf="flex-end"
                                        disabled={questionPersona.disabled}
                                        _disabled={{ 
                                            bgColor: '#B3B1B1',
                                            color: '#777676',
                                            opacity: 1
                                        }}
                                        _hover={{
                                            bgColor:'#3232E1'
                                        }}
                                        onClick={() => {
                                            questionComplete();
                                            props.clickEvent(questionPersona.value, questionPersona.selectedValue);
                                        }}
                                    >
                                        Next Question
                                    </Button>
                                    </Flex>
                                : <Button
                                    w={{ base: "100%", md: "350px" }}
                                    h="40px"
                                    bg="#0F62F4"
                                    borderRadius="8px"
                                    color="white"
                                    alignSelf="flex-end"
                                    disabled={questionPersona.disabled}
                                    _disabled={{ 
                                        bgColor: '#B3B1B1',
                                        color: '#777676',
                                        opacity: 1
                                    }}
                                    _hover={{
                                        bgColor:'#3232E1'
                                    }}
                                    onClick={() => {
                                        questionComplete();
                                        props.clickEvent(questionPersona.value, questionPersona.selectedValue);
                                    }}
                                >
                                    Next Question
                                </Button>
                            }
                        </Flex>
                </Box>
            </Show>
        </>
    )
} 