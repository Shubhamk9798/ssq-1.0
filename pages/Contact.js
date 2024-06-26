import {
  Button,
  ChakraProvider,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../lib/api";
import "./Contact.css";
import clogo1 from "../src/app/assets/customer.png";
import clogo2 from "../src/app/assets/letter.png";
import clogo3 from "../src/app//assets/location.png";
import Image from "next/image";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Contact() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <ChakraProvider>
      <div className="flex-contact">
        <div  className="contact-form">
          <Heading>Contact</Heading>
          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}

          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            mb={5}
            isRequired
            isInvalid={touched.subject && !values.subject}
          >
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            mb={5}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              type="text"
              name="message"
              rows={4}
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <Button
            variant="outline"
            colorScheme="blue"
            isLoading={isLoading}
            disabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message
            }
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
        <div className="right-div-contact">
          <h1 className="heading-info">Contact Info</h1>
          <div className="wrapper-c">
            <div>
              <Image className="c-logo" src={clogo1} alt="clogo" />
            </div>
            <div className="flex mx-5">
              <div className="numbers">
                <p className="flex-wrap ">+918788145711</p>
                <p className="flex-wrap">+919011384921</p>
              </div>
              <div className="numbers">
                <p className="flex-wrap">+917020103785</p>
                <p className="flex-wrap">+918983792128</p>
              </div>
            </div>
          </div>
          <div className="wrapper-c">
            <div>
              <Image className="c-logo" src={clogo2} alt="clogo" />
            </div>
            <div>
              <p className="flex-wrap">ssquareitsolutionspune@gmail.com</p>
            </div>
          </div>
          <div className="wrapper-c">
            <div>
              <Image className="c-logo2" src={clogo3} alt="clogo" />
            </div>
            <div>
              <p className="flex-wrap">
                S-101,A Wing,Harihareshwar Park,Near Nawale Hospital Back
                Gate,Narhe-Dhayri Road,Pune-41
              </p>
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
