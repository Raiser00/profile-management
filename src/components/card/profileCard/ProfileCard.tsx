import { Button, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";


export type ProfileCardType =
{
    firstName: string,
    lastName: string,
    nickName?: string,
    bio?: string
}

export function ProfileCard(profile: ProfileCardType)
{
    const fullName = `${profile.firstName} ${profile.lastName ? profile.lastName : "-"}`;

    return (
        <>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              p={"10px"}
              alignItems={{sm: "center", base: "center"}}
            >
              <Image
                borderRadius='full'
                maxW={{ base: "50%", sm: "100px" }}
                maxH={{ base: "50%", sm: "100px" }}
                src={profile.imgSrc}
                alt={fullName}
                align={"center"}
              />
    
              <Button colorScheme="red">Mon bouton</Button>
              <Stack>
                <CardBody>
                  <Heading size="md">{fullName}</Heading>
    
                  {profile.bio && (
                    <Text py="2">
                      {profile.bio}
                    </Text>
                  )}
                </CardBody>
              </Stack>
            </Card>
        </>
      );
}