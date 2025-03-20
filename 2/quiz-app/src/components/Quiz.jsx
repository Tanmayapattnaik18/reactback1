import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz, nextQuestion, updateScore } from "../redux/actions";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentIndex, score } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  if (questions.length === 0) return <Text>Loading...</Text>;

  const currentQuestion = questions[currentIndex];

  return (
    <VStack spacing={4}>
      <Text fontSize="xl">{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <Button key={index} onClick={() => { dispatch(updateScore(1)); dispatch(nextQuestion()); }}>
          {option}
        </Button>
      ))}
      <Text>Score: {score}</Text>
    </VStack>
  );
};

export default Quiz;
