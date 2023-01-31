import { Card, Grid, Row, Text, Link } from "@nextui-org/react";
import CopyToClipboard from "./CopyClipboard";

export default function NFTCards({ nfts }) {
  console.log("nfts", nfts);
  return (
    <Grid xs={3} sm={3} key={nfts.id.tokenId}>
      <Card isPressable>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={nfts?.media[0].gateway}
            objectFit="cover"
            width="100%"
            height={140}
            alt={"s"}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text >{nfts.title}</Text>
            <Text className="text-gray-600">
              Id: {nfts.id?.tokenId.substring(nfts.id?.tokenId.length - 4)}
            </Text>
            <p className="text-gray-600 cursor-pointer">{`${nfts.contract?.address.substring(
              0,
              4
            )} ... ${nfts.contract?.address.substring(
              nfts.contract.address.length - 4
            )}`}</p>



          <CopyToClipboard content={nfts.contract?.address} />

          <div className="flex-grow mt-2">
          <Text className="text-gray-600">{nfts?.description?.substring(0, 150)}</Text>
        </div>

         
        <Link
            href={`https://etherscan.io/token/${nfts.contract.address}`}
          >
            View On Etherscan
          </Link>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}

