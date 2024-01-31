import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Spinner,
  useDisclosure,
  transition,
} from "@chakra-ui/react";
import TeamCard from "@/components/TeamCard";
import { useState } from "react";

const ListTeams = ({ equipos, isLoading }) => {
  const [seleccion, setSeleccion] = useState();
  const [hover, setHover] = useState(false);

  function handleViewEquipos(equipos) {
    setSeleccion(equipos);
    console.log("equipo elegido", seleccion);
  }

  return (
    <>
      <Flex alignItems="center" minH="100vh" justifyContent="center">
        <Container maxW="container.lg">
          <Stack p="5" alignItems="center" spacing="5">
            <SimpleGrid
              spacing={{ base: 5, md: 2 }}
              columns={{ base: 1, md: 3, lg: 5 }}
            >
              {equipos.map((equipo) => (
                <Box
                  as="button"
                  key={equipo.team_key}                  
                  onClick={() => handleViewEquipos(equipo)}                  
                >
                  <TeamCard equipo={equipo}/>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Flex>
    </>
  );
};

export default ListTeams;
