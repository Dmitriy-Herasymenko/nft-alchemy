import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import NFTCards from "../components/NFTCards";

export async function getServerSideProps({}) {
  const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_API_KEY}/getNFTs/`;
  console.log("Fetching NFTs");

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
  const [collection, setCollectionAddress] = useState("");
  const [wallet, setWalletAddress] = useState(process.env.NEXT_PUBLIC_OWNER);

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
        <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center">
          {nfts.ownedNfts.length &&
            nfts.ownedNfts.map((nft: any) => (
              <NFTCards key={nft.id?.tokenId} nfts={nft} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
