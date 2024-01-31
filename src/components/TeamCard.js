import {
  Stack,
  Text,
  Image,
  HStack,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";


export default function TeamCard({ equipo, hover }) {
  const router = useRouter();
  const redirect = () => {
    router.push(`/club/${equipo.team_key}`);
  };
  
  
  return (
    <Stack
      spacing="5"
      overflow="hidden"
      p="4"
      borderRadius="lg"
      alignItems="center"
      height={250}
      width="auto"
      className="team-card"
      onClick={redirect}
            
    >
      <AspectRatio w="full" ratio={1}>
        <Image src={equipo.team_badge} alt={equipo.team_name} />
      </AspectRatio>
      <Text textAlign="center" textTransform="Capitalize">
        {equipo.team_name}
      </Text>
    </Stack>
  );
}
