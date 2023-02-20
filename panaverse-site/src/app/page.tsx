"use client";
import { Heading, Center } from "@chakra-ui/react";
import Image from "next/image";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      {/* <Center>
        <Heading as="h1" size="lg" mt={2} mb={2}>
          Panaverse Dao
          <Image src="/zia khan.jpeg" width={800} height={800} alt="Picture" />
        </Heading>
      </Center> */}
      <Grid
        templateAreas={`
                  "nav main"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"550px 1fr"}
        h="200px"
        color="blackAlpha.700"
        gap="1"
        fontWeight="bold"
      >
        <GridItem pl="4" pt="10" area={"nav"}>
          <h1 className="h3">Web 3.0 and Metaverse Developement</h1>
          <h1 className="h5 pt-1">
            A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
          </h1>
          <h1 className="h5 pt-4">
            Getting Ready for the Next Generation and Future of the Internet -
            Join a 13 Trillion Dollar Industry with 5 Billion Users
          </h1>
          <h1 className="h5 pt-4">
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technolgies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
          </h1>
        </GridItem>
        <GridItem pl="2" area={"main"}>
          <Image src="/zia khan.jpeg" width={800} height={800} alt="Picture" />
        </GridItem>
      </Grid>
    </main>
  );
}
