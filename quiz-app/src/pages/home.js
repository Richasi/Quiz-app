import { Box, Container, Input, Text, Select, Button, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getdata } from '../redux/action';
import {  useNavigate } from "react-router-dom";
export const Home = () => {
    const Navigate=useNavigate()
    const dispatch=useDispatch()
    const [name, setName] = useState("");
    const [data, setData] = useState({
        amount: "",
        difficulty: "",
        category: "",
        type: "multiple"
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getdata(data))
        console.log(data);
        Navigate("/quiz")

    }

    const { amount, difficulty, category } = data;

    return (
        <Box w="100%">
            <Text fontSize='30px'>Set up your quiz</Text>
            <Container w="30%" p="10px" m="auto">
                <Input placeholder='Enter your Name' w="90%" p="6px" marginBottom="20px" onChange={(e) => setName(e.target.value)} />
                <Select placeholder='Select Category' w="94%" p="6px" margin="auto" marginBottom="20px" value={category} name='category' onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="General Knowledge">General Knowledge</option>
                    <option value="Sports">Sports</option>
                    <option value="Geography">Geography</option>
                </Select>
                <Select placeholder='Select Difficulty' w="94%" p="6px" margin="auto" marginBottom="20px" value={difficulty} name='difficulty' onChange={handleChange}>
                    <option value="">Select Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </Select>
                <Input placeholder='Choose Number of Questions' w="90%" p="6px" marginBottom="20px" value={amount} name='amount' onChange={handleChange} />
                <br />
                <Button w="94%" p="6px" onClick={handleSubmit}>START QUIZ</Button>
            </Container>
        </Box>
    );
}
