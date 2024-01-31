import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Heading, Flex, Spinner } from "@chakra-ui/react";
import ListTeams from "@/components/ListTeams";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://apiv3.apifootball.com/?action=get_teams&league_id=41&APIkey=1c92808848c26da7b04e93291d350fbd4a8e5ccdd862c5c52b56813e87916172`
      )
      .then(({ data }) => {
        if (data && data.length > 0) {
          setEquipos(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
        <Flex
        align="center"
        justify="center"
        direction="row"
        textAlign="center"
        >
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}

      {!isLoading && (
          <Heading
            size="4xl"
            color="blue.600"
            textAlign="center"
            textShadow="2px 2px 2px rgba(0,0,0,0.5)"
            marginRight="30px"
          >
            Primera Nacional
          </Heading>
          <Image
            src="https://i.ibb.co/n6vfs7z/logo-Bnacional.jpg"
            boxSize="100px"
          ></Image>
      )}
      <ListTeams equipos={equipos} />
        </Flex>
    </>
  );
}
