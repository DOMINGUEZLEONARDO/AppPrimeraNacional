import {
  Box,
  Stack,
  Image,
  Grid,
  GridItem,
  Card,
  CardHeader,
  Heading,
  CardBody,
  SimpleGrid,
  Text,
  CardFooter,
  StackDivider,
  Flex,
  Center,
  Square,
  AspectRatio,
  Button,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PlayerCard from "./PlayerCard";
import {TabStadings}  from "./TabStadings";

const TeamDescription = () => {
  const router = useRouter();
  const { id } = router.query;
  const [equipo, setEquipo] = useState([]);
   useEffect(() => {
    const getInformation = async () => {
      try {
        const { data } = await axios.get(
          `https://apiv3.apifootball.com/?action=get_teams&league_id=41&team_id=${id}&APIkey=1c92808848c26da7b04e93291d350fbd4a8e5ccdd862c5c52b56813e87916172`
        );
        console.log("data", data);

        setEquipo(data[0]);
        console.log("dato", equipo);
      } catch (error) {
        console.error("error al obtener datos", error);
      }
    };
    getInformation();
  }, [id]);

  return (
    <>
      {Object.keys(equipo).length > 0 && (
        <Grid
          h="auto"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          bg="slategrey"
        >
          <GridItem
            rowSpan={11}
            colSpan={1}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Card align="center" bg="lemonchiffon">
              <Image
                height="150px"
                width="auto"
                margin="30px"
                src={equipo.team_badge}
              ></Image>
              <CardHeader padding="15px">
                <Heading size="md">{equipo.venue.venue_name}</Heading>
              </CardHeader>
              <CardBody padding="10px">
                <Text fontWeight={500} margin="18px">
                  {equipo.venue.venue_city}
                </Text>
                <Text fontFamily="sans-serif" fontSize="small">
                  Capacidad {equipo.venue.venue_capacity} personas sentadas
                </Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="blue">Como llegar</Button>
              </CardFooter>
            </Card>
            <TabStadings equipo={equipo}/>
          </GridItem>

          <GridItem
            rowSpan={1}
            colSpan={4}
            height="100px"
            bg="lemonchiffon"
            textAlign="center"
            padding="20px"
          >
            <Heading as="h1" size="3xl">{equipo.team_name}</Heading>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={4}
            height="100px"
            bg="lemonchiffon"
            flexDirection="column"
            textAlign="center"
            margin="10px"
            
           
            padding="20px"
          >
            <Heading as="h2" size="xl">Plantel Temporada 2023</Heading>
          </GridItem>
          {equipo.players.map((player) => (
            <PlayerCard key={player.player_key} player={player} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default TeamDescription;
