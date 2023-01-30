import React from "react";


const NFTCards = ({ nfts }) => {
    console.log("dsdsds", nfts)
  return (

                <div className="w-1/4 flex flex-col " key={nfts.id?.tokenId}>
                <div className="rounded-md">
                  <img
                    className="object-cover h-128 w-full rounded-t-md"
                    src={nfts.media[0].gateway}
                  ></img>
                </div>
                <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
                  <div className="">
                    <h2 className="text-xl text-gray-800">{nfts?.title}</h2>
                    <p className="text-gray-600">
                      Id: {nfts.id?.tokenId.substring(nfts.id?.tokenId.length - 4)}
                    </p>
                    <p className="text-gray-600 cursor-pointer">{`${nfts.contract?.address.substring(
                      0,
                      4
                    )} ... ${nfts.contract?.address.substring(
                      nfts.contract.address.length - 4
                    )}`}</p>
          
                  </div>
          
                  <div className="flex-grow mt-2">
                    <p className="text-gray-600">{nfts?.description?.substring(0, 150)}</p>
                  </div>
          
                  <div>
                    <a
                      href={`https://etherscan.io/token/${nfts.contract.address}`}
                      rel="noreferrer nofollow"
                      target="_blank"
                      className="text-blue-500"
                    >
                      View On Etherscan
                    </a>
                  </div>
                </div>
              </div>
            );
};

export default NFTCards;
