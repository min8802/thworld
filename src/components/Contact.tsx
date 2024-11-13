import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const Contact: FC = () => {
    return (
        <Flex
            w="100%"
            minH="60vh"
            color="white"
            pt={32}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="24px" mb={8} fontWeight="bold">
                Contact Information
            </Text>
            <Flex flexDir="column" alignItems="center" fontSize="16px" lineHeight="1.8">
                <Text>Company Name: XYZ Corporation</Text>
                <Text>Email: contact@xyzcorporation.com</Text>
                <Text>Phone: +1 (123) 456-7890</Text>
                <Text>Address: 1234 Elm Street, Suite 567, Cityville, Country</Text>
            </Flex>
            <Text fontSize="12px" mt={20}>
                Copyright © XYZ Corporation 2024 All Rights Reserved.
            </Text>
        </Flex>
    );
}
export default Contact;
