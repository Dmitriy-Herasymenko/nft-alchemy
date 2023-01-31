import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import NFTCards from "../components/NFTCards";
import { Grid } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";

const PAGE_ROWS = 1;

export async function getServerSideProps({}) {
  const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_API_KEY}/getNFTs/`;
  let requestOptions = {
    method: "GET",
  };
  const fetchURL = `${baseURL}?owner=${process.env.NEXT_PUBLIC_OWNER}`;
  const nfts = await fetch(fetchURL, requestOptions).then((data) =>
    data.json()
  );

  return {
    props: { nfts },
  };

  // } else {
  //   console.log("Fetching NFTs for collection owned by address");

  //   const fetchURL = `${baseURL}?owner=${process.env.NEXT_PUBLIC_OWNER}&contractAddresses%5B%5D=${collection}`;

  //   nfts = await fetch(fetchURL, requestOptions).then((data) => data.json());
  //   console.log("nfts", nfts)
  //   return {
  //     props: { token: nft },
  //   };
  // }
}

const Home = ({ nfts }: any) => {
  const [pages, setPages] = useState(PAGE_ROWS);
  const [nftPage, setNftPage] = useState([])
  const [wallet, setWalletAddress] = useState(process.env.NEXT_PUBLIC_OWNER);

  const loadMoreNfts = (page:number) => {
    let start = (page - 1) * 10;
    let end = start + 9;
    let newNFTs = nfts.ownedNfts.slice(start, end);
    console.log("New NFTs : ", newNFTs);
    setNftPage(newNFTs);
    setPages(Math.ceil(nfts.ownedNfts.length / 10));
  };

  useEffect(() => {
    loadMoreNfts(pages);
  }, [nfts, pages]);

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <Head>
          <title>NFT-Gallery</title>
        </Head>
        <input
          onChange={(e) => {
            setWalletAddress(e.target.value);
          }}
          value={wallet}
          type={"text"}
          placeholder="Add your wallet address"
        ></input>
        <button
          className={
            "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"
          }
          onClick={() => {
            console.log("as", nfts);
          }}
        >
          Let's Go!
        </button>
        <Grid.Container gap={2} justify="flex-start">
          {nftPage?.map((nft: any) => (
              <NFTCards key={nft.id?.tokenId} nfts={nft} />
            ))}
         </Grid.Container>
         <Pagination total={nfts.ownedNfts.length} initialPage={pages} onChange={ (e) => setPages(e)} />
      </div>
    </div>
  );
};

export default Home;
