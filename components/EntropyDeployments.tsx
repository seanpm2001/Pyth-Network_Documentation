export interface EntropyDeployment {
  address: string;
  network: "mainnet" | "testnet";
  explorer: string;
  delay: string;
  gasLimit: string;
  rpc: string;
}

export const EntropyDeployments: Record<string, EntropyDeployment> = {
  blast: {
    address: "0x5744Cbf430D99456a0A8771208b674F27f8EF0Fb",
    network: "mainnet",
    explorer: "https://blastscan.io/address/$ADDRESS",
    delay: "1 block",
    gasLimit: "500K",
    rpc: "https://rpc.blast.io",
  },
  "lightlink-phoenix": {
    address: "0x98046Bd286715D3B0BC227Dd7a956b83D8978603",
    network: "mainnet",
    explorer: "https://phoenix.lightlink.io/address/$ADDRESS",
    delay: "1 block",
    gasLimit: "500K",
    rpc: "https://replicator.phoenix.lightlink.io/rpc/v1",
  },
  chiliz: {
    address: "0x0708325268dF9F66270F1401206434524814508b",
    network: "mainnet",
    explorer: "https://scan.chiliz.com/address/$ADDRESS",
    delay: "12 blocks",
    gasLimit: "500K",
    rpc: "https://rpc.ankr.com/chiliz",
  },
  arbitrum: {
    address: "0x7698E925FfC29655576D0b361D75Af579e20AdAc",
    network: "mainnet",
    explorer: "https://arbiscan.io/address/$ADDRESS",
    delay: "6 blocks",
    gasLimit: "2.5M",
    rpc: "https://arb1.arbitrum.io/rpc",
  },
  optimism: {
    address: "0xdF21D137Aadc95588205586636710ca2890538d5",
    network: "mainnet",
    explorer: "https://optimistic.etherscan.io/address/$ADDRESS",
    delay: "2 blocks",
    gasLimit: "500K",
    rpc: "https://rpc.ankr.com/optimism",
  },
  mode: {
    address: "0x8D254a21b3C86D32F7179855531CE99164721933",
    network: "mainnet",
    explorer: "https://explorer.mode.network/address/$ADDRESS",
    delay: "2 blocks",
    gasLimit: "500K",
    rpc: "https://mainnet.mode.network/",
  },
  zetachain: {
    address: "0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320",
    network: "mainnet",
    explorer: "https://zetachain.blockscout.com/address/$ADDRESS",
    delay: "0 block",
    gasLimit: "500K",
    rpc: "https://zetachain-evm.blockpi.network/v1/rpc/public",
  },
  base: {
    address: "0x6E7D74FA7d5c90FEF9F0512987605a6d546181Bb",
    network: "mainnet",
    explorer: "https://basescan.org/address/$ADDRESS",
    delay: "1 block",
    gasLimit: "500K",
    rpc: "https://developer-access-mainnet.base.org/",
  },
  "lightlink-pegasus": {
    rpc: "https://replicator.pegasus.lightlink.io/rpc/v1",
    network: "testnet",
    delay: "",
    address: "0x8250f4aF4B972684F7b336503E2D6dFeDeB1487a",
    explorer: "https://pegasus.lightlink.io/address/$ADDRESS",
    gasLimit: "500K",
  },
  "chiliz-spicy": {
    rpc: "https://spicy-rpc.chiliz.com",
    network: "testnet",
    delay: "",
    address: "0xD458261E832415CFd3BAE5E416FdF3230ce6F134",
    explorer: "https://spicy-explorer.chiliz.com/address/$ADDRESS",
    gasLimit: "500K",
  },
  "conflux-espace-testnet": {
    rpc: "https://evmtestnet.confluxrpc.com",
    network: "testnet",
    delay: "",
    address: "0xdF21D137Aadc95588205586636710ca2890538d5",
    explorer: "https://evmtestnet.confluxscan.io/address/$ADDRESS",
    gasLimit: "500K",
  },
  "mode-sepolia": {
    rpc: "https://sepolia.mode.network/",
    network: "testnet",
    delay: "",
    address: "0x98046Bd286715D3B0BC227Dd7a956b83D8978603",
    explorer: "https://sepolia.explorer.mode.network/address/$ADDRESS",
    gasLimit: "500K",
  },
  "sei-evm-testnet": {
    rpc: "https://evm-rpc-testnet.sei-apis.com",
    network: "testnet",
    delay: "",
    address: "0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320",
    explorer: "https://seitrace.com/address/$ADDRESS?chain=atlantic-2",
    gasLimit: "500K",
  },
  "arbitrum-sepolia": {
    rpc: "https://sepolia-rollup.arbitrum.io/rpc",
    network: "testnet",
    delay: "",
    address: "0x549Ebba8036Ab746611B4fFA1423eb0A4Df61440",
    explorer: "https://sepolia.arbiscan.io/address/$ADDRESS",
    gasLimit: "2.5M",
  },
  "fantom-sonic": {
    rpc: "https://rpc.sonic.fantom.network/",
    network: "testnet",
    delay: "",
    address: "0xb27e5ca259702f209a29225d0eDdC131039C9933",
    explorer: "https://public-sonic.fantom.network/address/$ADDRESS",
    gasLimit: "500K",
  },
  "blast-testnet": {
    rpc: "https://sepolia.blast.io",
    network: "testnet",
    delay: "",
    address: "0x98046Bd286715D3B0BC227Dd7a956b83D8978603",
    explorer: "https://testnet.blastscan.io/address/$ADDRESS",
    gasLimit: "500K",
  },
  "optimism-sepolia": {
    rpc: "https://sepolia.optimism.io",
    network: "testnet",
    delay: "",
    address: "0x4821932D0CDd71225A6d914706A621e0389D7061",
    explorer: "https://optimism-sepolia.blockscout.com/address/$ADDRESS",
    gasLimit: "500K",
  },
  "base-sepolia": {
    rpc: "https://sepolia.base.org",
    network: "testnet",
    delay: "",
    address: "0x41c9e39574F40Ad34c79f1C99B66A45eFB830d4c",
    explorer: "https://base-sepolia.blockscout.com/address/$ADDRESS",
    gasLimit: "500K",
  },
  "berachain-testnet-v2": {
    rpc: "https://evm-rpc-bera.rhino-apis.com/",
    network: "testnet",
    delay: "https://bartio.beratrail.io/address/$ADDRESS",
    address: "0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320",
    explorer: "",
    gasLimit: "500K",
  },
  "coredao-testnet": {
    rpc: "https://rpc.test.btcs.network",
    network: "testnet",
    delay: "",
    address: "0xf0a1b566B55e0A0CB5BeF52Eb2a57142617Bee67",
    explorer: "https://scan.test.btcs.network/address/$ADDRESS",
    gasLimit: "500K",
  },
  "zetachain-testnet": {
    rpc: "https://zetachain-athens-evm.blockpi.network/v1/rpc/public",
    network: "testnet",
    delay: "",
    address: "0x4374e5a8b9C22271E9EB878A2AA31DE97DF15DAF",
    explorer: "https://explorer.zetachain.com/address/$ADDRESS",
    gasLimit: "500K",
  },
  "taiko-hekla": {
    rpc: "https://rpc.hekla.taiko.xyz/",
    network: "testnet",
    delay: "",
    address: "0x98046Bd286715D3B0BC227Dd7a956b83D8978603",
    explorer: "https://hekla.taikoscan.network/address/$ADDRESS",
    gasLimit: "500K",
  },
  "orange-testnet": {
    address: "0x98046Bd286715D3B0BC227Dd7a956b83D8978603",
    explorer: "https://subnets-test.avax.network/orangetest/address/$ADDRESS",
    delay: "",
    gasLimit: "500K",
    network: "testnet",
    rpc: "https://subnets.avax.network/orangetest/testnet/rpc",
  },
  "sei-evm-mainnet": {
    address: "0x98046Bd286715D3B0BC227Dd7a956b83D8978603",
    explorer: "https://seitrace.com/address/$ADDRESS?chain=pacific-1",
    delay: "1 block",
    gasLimit: "500K",
    network: "mainnet",
    rpc: "https://evm-rpc.sei-apis.com",
  },
  merlin: {
    address: "0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320",
    explorer: "https://scan.merlinchain.io/address/$ADDRESS",
    delay: "1 block",
    gasLimit: "500K",
    network: "mainnet",
    rpc: "https://rpc.merlinchain.io",
  },
  "merlin-testnet": {
    address: "0x5744Cbf430D99456a0A8771208b674F27f8EF0Fb",
    explorer: "https://testnet-scan.merlinchain.io/address/$ADDRESS",
    delay: "",
    gasLimit: "500K",
    network: "testnet",
    rpc: "https://testnet-rpc.merlinchain.io/",
  },
  taiko: {
    address: "0x26DD80569a8B23768A1d80869Ed7339e07595E85",
    explorer: "https://taikoscan.io/address/$ADDRESS",
    delay: "1 block",
    gasLimit: "500K",
    network: "mainnet",
    rpc: "https://rpc.mainnet.taiko.xyz",
  },
  "etherlink-testnet": {
    address: "0x23f0e8FAeE7bbb405E7A7C3d60138FCfd43d7509",
    explorer: "https://testnet-explorer.etherlink.com/address/$ADDRESS",
    delay: "",
    gasLimit: "15M",
    network: "testnet",
    rpc: "https://node.ghostnet.etherlink.com",
  },
  etherlink: {
    address: "0x23f0e8FAeE7bbb405E7A7C3d60138FCfd43d7509",
    explorer: "https://explorer.etherlink.com/address/$ADDRESS",
    delay: "1 block",
    gasLimit: "15M",
    network: "mainnet",
    rpc: "https://node.mainnet.etherlink.com/",
  },
  klaytn: {
    address: "0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320",
    explorer: "https://klaytnfinder.io/account/$ADDRESS",
    delay: "1 block",
    gasLimit: "500K",
    network: "mainnet",
    rpc: "https://rpc.ankr.com/klaytn",
  },
  "klaytn-testnet": {
    address: "0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320",
    explorer: "https://baobab.klaytnscope.com/account/$ADDRESS",
    delay: "",
    gasLimit: "500K",
    network: "testnet",
    rpc: "https://rpc.ankr.com/klaytn_testnet",
  },
  "tabi-testnet": {
    address: "0x36825bf3Fbdf5a29E2d5148bfe7Dcf7B5639e320",
    explorer: "https://testnet.tabiscan.com/address/$ADDRESS",
    delay: "",
    gasLimit: "500K",
    network: "testnet",
    rpc: "https://rpc-internal.testnet.tabichain.com/",
  },
  "b3-testnet": {
    address: "0x5744Cbf430D99456a0A8771208b674F27f8EF0Fb",
    explorer: "https://sepolia.explorer.b3.fun/address/$ADDRESS",
    delay: "",
    gasLimit: "500K",
    network: "testnet",
    rpc: "https://sepolia.b3.fun/http/",
  },
  "b3-mainnet": {
    address: "0x5744Cbf430D99456a0A8771208b674F27f8EF0Fb",
    explorer: "https://explorer.b3.fun/address/$ADDRESS",
    delay: "1 block",
    gasLimit: "500K",
    network: "mainnet",
    rpc: "https://mainnet-rpc.b3.fun/http",
  },
};
