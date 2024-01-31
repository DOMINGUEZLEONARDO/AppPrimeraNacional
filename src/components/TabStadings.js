import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

export const TabStadings = ({ equipo }) => {
  const [results, setResult] = useState({});
  const { team_key } = equipo;
  useEffect(() => {
    const Stadistics = async () => {
      try {
        const { data } = await axios.get(
          `https://apiv3.apifootball.com/?action=get_events&from=2023-01-01&to=2023-12-31&league_id=41&team_id=${team_key}&APIkey=1c92808848c26da7b04e93291d350fbd4a8e5ccdd862c5c52b56813e87916172`
        );
        setResult(data);
        console.log("resultados", data);
      } catch (error) {
        console.error(error);
      }
    };
    Stadistics();
  }, [team_key]);
  console.log("resultado home", results);
  return (
    <>
      
        <TableContainer>
          <Table
            variant="striped"
            colorScheme="linkedin"
            size="sm"
            // marginLeft="8px"
            overflowX="auto"
          >
            <TableCaption>Resultados</TableCaption>
            <Thead>
              <Tr>
                <Th textAlign="center">Local</Th>
                <Th textAlign="center">Visitante</Th>
                <Th isNumeric paddingLeft="5px">
                  Resultado
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {results.length > 0 ? (
                results.map((result) => (
                  <Tr key={result.match_id}>
                    <Td textAlign="center">{result.match_hometeam_name}</Td>
                    <Td textAlign="center">{result.match_awayteam_name}</Td>
                    <Td textAlign="center">
                      {result.match_hometeam_score} -{" "}
                      {result.match_awayteam_score}
                    </Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan={4} textAlign="center">
                    No hay estadísticas para mostrar
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      
    </>
  );
};
