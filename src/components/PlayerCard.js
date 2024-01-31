import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";

const PlayerCard = ({ player }) => {
  const { player_name, player_image, player_birthdate, player_match_played } =
    player;
  console.log("imagen", player_image);
  return (
    <Card maxW="sm" boxShadow={2} margin="6px">
      <CardBody>
        <Image
          src={player_image}
          alt={player_name}
          fallback={
            <img
              src="https://i.ibb.co/6ntK08n/image.jpg"
              alt={player_name}
              crossOrigin="anonymous"
            />
          }
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{player_name}</Heading>
          <Text>Fecha de nacimiendo</Text>
          <Text>{player_birthdate}</Text>
          <Stack direction="row" justify="center"align="center"  >
            <Text color="black.500" fontSize="xl">
              Partidos Jugados
            </Text>           
            <Text color="black.500" fontSize="xl">
              {player_match_played}
            </Text>
          </Stack>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default PlayerCard;
