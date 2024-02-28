import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Stack, Text, useColorModeValue, VStack, Heading, FormErrorMessage } from "@chakra-ui/react";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [form, setForm] = useState({ name: "", id: "", dateOfBirth: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement form submission logic
    console.log(form);
    setIsSubmitting(false);
  };

  const isFormInvalid = () => {
    return !(form.name && form.id && form.dateOfBirth);
  };

  return (
    <Container maxW="lg" py={{ base: "12", md: "24" }} px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Heading mt="1" fontWeight="extrabold" size="2xl" fontFamily="Roboto">
            Welcome!
          </Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.400")} fontFamily="Roboto">
            Sign in to your account or sign up for a new experience
          </Text>
        </Stack>
        <Box py="8" px={{ base: "4", md: "10" }} bg={useColorModeValue("blue.50", "blue.800")} borderRadius="lg" boxShadow="base">
          <VStack spacing="6">
            <FormControl isRequired isInvalid={isFormInvalid()}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired isInvalid={isFormInvalid()}>
              <FormLabel htmlFor="id">ID</FormLabel>
              <Input id="id" name="id" type="text" value={form.id} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired isInvalid={isFormInvalid()}>
              <FormLabel htmlFor="dateOfBirth">Date of Birth</FormLabel>
              <Input id="dateOfBirth" name="dateOfBirth" type="date" value={form.dateOfBirth} onChange={handleChange} />
              <FormErrorMessage>Form is invalid.</FormErrorMessage>
            </FormControl>
            <Flex w="full" gap="4">
              <Button w="full" fontSize="md" fontWeight="bold" colorScheme="blue" leftIcon={<FaSignInAlt />} isDisabled={isFormInvalid()} isLoading={isSubmitting} onClick={handleSubmit}>
                Sign In
              </Button>
              <Button w="full" fontSize="md" fontWeight="bold" variant="outline" colorScheme="blue" leftIcon={<FaUserPlus />}>
                Sign Up
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;
