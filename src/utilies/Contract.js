// export const financeAppContractAddress =
//   "0xEDe576DF935D597e483f4764F45cD0119247b7bc";
// export const financeAppContract_Abi = [{
//   "inputs": [{
//     "internalType": "contract IBEP20",
//     "name": "_busdAddr",
//     "type": "address"
//   }, {
//     "internalType": "address",
//     "name": "_defaultRefer",
//     "type": "address"
//   }, {
//     "internalType": "address",
//     "name": "_feeReceivers",
//     "type": "address"
//   }],
//   "stateMutability": "nonpayable",
//   "type": "constructor"
// }, {
//   "anonymous": false,
//   "inputs": [{
//     "indexed": false,
//     "internalType": "address",
//     "name": "user",
//     "type": "address"
//   }, {
//     "indexed": false,
//     "internalType": "uint256",
//     "name": "amount",
//     "type": "uint256"
//   }],
//   "name": "Deposit",
//   "type": "event"
// }, {
//   "anonymous": false,
//   "inputs": [{
//     "indexed": false,
//     "internalType": "address",
//     "name": "user",
//     "type": "address"
//   }, {
//     "indexed": false,
//     "internalType": "uint256",
//     "name": "amount",
//     "type": "uint256"
//   }],
//   "name": "DepositBySplit",
//   "type": "event"
// }, {
//   "anonymous": false,
//   "inputs": [{
//     "indexed": false,
//     "internalType": "address",
//     "name": "user",
//     "type": "address"
//   }, {
//     "indexed": false,
//     "internalType": "address",
//     "name": "referral",
//     "type": "address"
//   }],
//   "name": "Register",
//   "type": "event"
// }, {
//   "anonymous": false,
//   "inputs": [{
//     "indexed": false,
//     "internalType": "address",
//     "name": "user",
//     "type": "address"
//   }, {
//     "indexed": false,
//     "internalType": "address",
//     "name": "receiver",
//     "type": "address"
//   }, {
//     "indexed": false,
//     "internalType": "uint256",
//     "name": "amount",
//     "type": "uint256"
//   }],
//   "name": "TransferBySplit",
//   "type": "event"
// }, {
//   "anonymous": false,
//   "inputs": [{
//     "indexed": false,
//     "internalType": "address",
//     "name": "user",
//     "type": "address"
//   }, {
//     "indexed": false,
//     "internalType": "uint256",
//     "name": "withdrawable",
//     "type": "uint256"
//   }],
//   "name": "Withdraw",
//   "type": "event"
// }, {
//   "inputs": [],
//   "name": "ClaimGassFee",
//   "outputs": [],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "name": "UserFee",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "amount",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "time",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "name": "balStatus",
//   "outputs": [{
//     "internalType": "bool",
//     "name": "",
//     "type": "bool"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "busd",
//   "outputs": [{
//     "internalType": "contract IBEP20",
//     "name": "",
//     "type": "address"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "_amount",
//     "type": "uint256"
//   }],
//   "name": "changeFeePercentage",
//   "outputs": [],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "contractOwner",
//   "outputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "name": "dayLuckUsers",
//   "outputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "name": "dayLuckUsersDeposit",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "name": "dayTopUsers",
//   "outputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "defaultRefer",
//   "outputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "_amount",
//     "type": "uint256"
//   }],
//   "name": "deposit",
//   "outputs": [],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "_amount",
//     "type": "uint256"
//   }],
//   "name": "depositBySplit",
//   "outputs": [],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "name": "depositors",
//   "outputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "distributePoolRewards",
//   "outputs": [],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "feeReceivers",
//   "outputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "getCurDay",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "_user",
//     "type": "address"
//   }],
//   "name": "getCurSplit",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "_day",
//     "type": "uint256"
//   }],
//   "name": "getDayLuckLength",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "getDepositorsLength",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "_user",
//     "type": "address"
//   }],
//   "name": "getMaxFreezing",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "_user",
//     "type": "address"
//   }],
//   "name": "getOrderLength",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "_user",
//     "type": "address"
//   }],
//   "name": "getTeamDeposit",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "_user",
//     "type": "address"
//   }, {
//     "internalType": "uint256",
//     "name": "_layer",
//     "type": "uint256"
//   }],
//   "name": "getTeamUsersLength",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "isFreezeReward",
//   "outputs": [{
//     "internalType": "bool",
//     "name": "",
//     "type": "bool"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "lastDistribute",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "name": "level4Users",
//   "outputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "luckPool",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "minDepositSpit",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }, {
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "name": "orderInfos",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "amount",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "start",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "unfreeze",
//     "type": "uint256"
//   }, {
//     "internalType": "bool",
//     "name": "isUnfreezed",
//     "type": "bool"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "owner",
//   "outputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "_referral",
//     "type": "address"
//   }, {
//     "internalType": "uint256",
//     "name": "_amount",
//     "type": "uint256"
//   }],
//   "name": "register",
//   "outputs": [],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "name": "rewardInfo",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "capitals",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "statics",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "directs",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "level4Freezed",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "level4Released",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "level5Left",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "level5Freezed",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "level5Released",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "star",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "luck",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "top",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "split",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "splitDebt",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "starPool",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "startTime",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }, {
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "name": "teamUsers",
//   "outputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "topPool",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "totalUser",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "_receiver",
//     "type": "address"
//   }, {
//     "internalType": "uint256",
//     "name": "_amount",
//     "type": "uint256"
//   }],
//   "name": "transferBySplit",
//   "outputs": [],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "name": "userInfo",
//   "outputs": [{
//     "internalType": "address",
//     "name": "referrer",
//     "type": "address"
//   }, {
//     "internalType": "uint256",
//     "name": "start",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "level",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "maxDeposit",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "totalDeposit",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "teamNum",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "maxDirectDeposit",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "teamTotalDeposit",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "totalFreezed",
//     "type": "uint256"
//   }, {
//     "internalType": "uint256",
//     "name": "totalRevenue",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }, {
//     "internalType": "address",
//     "name": "",
//     "type": "address"
//   }],
//   "name": "userLayer1DayDeposit",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "withdraw",
//   "outputs": [],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }]

// export const financeAppTokenAddress =
//   "0x208F521710620d417E9f35a37f107e360f4A7c3d";
// export const financeAppTokenAbi = [{
//   "inputs": [],
//   "stateMutability": "nonpayable",
//   "type": "constructor"
// }, {
//   "anonymous": false,
//   "inputs": [{
//     "indexed": true,
//     "internalType": "address",
//     "name": "owner",
//     "type": "address"
//   }, {
//     "indexed": true,
//     "internalType": "address",
//     "name": "spender",
//     "type": "address"
//   }, {
//     "indexed": false,
//     "internalType": "uint256",
//     "name": "value",
//     "type": "uint256"
//   }],
//   "name": "Approval",
//   "type": "event"
// }, {
//   "anonymous": false,
//   "inputs": [{
//     "indexed": true,
//     "internalType": "address",
//     "name": "from",
//     "type": "address"
//   }, {
//     "indexed": true,
//     "internalType": "address",
//     "name": "to",
//     "type": "address"
//   }, {
//     "indexed": false,
//     "internalType": "uint256",
//     "name": "value",
//     "type": "uint256"
//   }],
//   "name": "Transfer",
//   "type": "event"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "amount",
//     "type": "uint256"
//   }],
//   "name": "Mint",
//   "outputs": [],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "owner",
//     "type": "address"
//   }, {
//     "internalType": "address",
//     "name": "spender",
//     "type": "address"
//   }],
//   "name": "allowance",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "spender",
//     "type": "address"
//   }, {
//     "internalType": "uint256",
//     "name": "value",
//     "type": "uint256"
//   }],
//   "name": "approve",
//   "outputs": [{
//     "internalType": "bool",
//     "name": "",
//     "type": "bool"
//   }],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "account",
//     "type": "address"
//   }],
//   "name": "balanceOf",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "uint256",
//     "name": "_value",
//     "type": "uint256"
//   }],
//   "name": "burn",
//   "outputs": [],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "decimals",
//   "outputs": [{
//     "internalType": "uint8",
//     "name": "",
//     "type": "uint8"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "spender",
//     "type": "address"
//   }, {
//     "internalType": "uint256",
//     "name": "subtractedValue",
//     "type": "uint256"
//   }],
//   "name": "decreaseAllowance",
//   "outputs": [{
//     "internalType": "bool",
//     "name": "",
//     "type": "bool"
//   }],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "spender",
//     "type": "address"
//   }, {
//     "internalType": "uint256",
//     "name": "addedValue",
//     "type": "uint256"
//   }],
//   "name": "increaseAllowance",
//   "outputs": [{
//     "internalType": "bool",
//     "name": "",
//     "type": "bool"
//   }],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "name",
//   "outputs": [{
//     "internalType": "string",
//     "name": "",
//     "type": "string"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "symbol",
//   "outputs": [{
//     "internalType": "string",
//     "name": "",
//     "type": "string"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [],
//   "name": "totalSupply",
//   "outputs": [{
//     "internalType": "uint256",
//     "name": "",
//     "type": "uint256"
//   }],
//   "stateMutability": "view",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "recipient",
//     "type": "address"
//   }, {
//     "internalType": "uint256",
//     "name": "amount",
//     "type": "uint256"
//   }],
//   "name": "transfer",
//   "outputs": [{
//     "internalType": "bool",
//     "name": "",
//     "type": "bool"
//   }],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }, {
//   "inputs": [{
//     "internalType": "address",
//     "name": "sender",
//     "type": "address"
//   }, {
//     "internalType": "address",
//     "name": "recipient",
//     "type": "address"
//   }, {
//     "internalType": "uint256",
//     "name": "amount",
//     "type": "uint256"
//   }],
//   "name": "transferFrom",
//   "outputs": [{
//     "internalType": "bool",
//     "name": "",
//     "type": "bool"
//   }],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }]

export const financeAppContractAddress =
  "0x10941ED815e54F1221b27D13E38212Ae0BB68D62";
export const financeAppContract_Abi = [
  {
    inputs: [
      { internalType: "contract IBEP20", name: "_busdAddr", type: "address" },
      { internalType: "address", name: "_defaultRefer", type: "address" },
      { internalType: "address", name: "_feeReceivers", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DepositBySplit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "referral",
        type: "address",
      },
    ],
    name: "Register",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferBySplit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawable",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "ClaimGassFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_addr", type: "address" }],
    name: "TransferAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "UserFee",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "time", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "balStatus",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "busd",
    outputs: [{ internalType: "contract IBEP20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "changeFeeVal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "checkMaxDeposit",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address", name: "addr", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IBEP20", name: "_addr", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "clearstuckToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "dayLuckUsers",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "dayLuckUsersDeposit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "dayTopUsers",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultRefer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "address", name: "_refferal", type: "address" },
    ],
    name: "depositBySplit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "depositors",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distributePoolRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeReceivers",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurDay",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "getCurSplit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_day", type: "uint256" }],
    name: "getDayLuckLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDepositorsLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "getMaxFreezing",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "getOrderLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "getTeamDeposit",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "uint256", name: "_layer", type: "uint256" },
    ],
    name: "getTeamUsersLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isFreezeReward",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastDistribute",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "level4Users",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "luckPool",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minDepositSpit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "orderInfos",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "start", type: "uint256" },
      { internalType: "uint256", name: "unfreeze", type: "uint256" },
      { internalType: "bool", name: "isUnfreezed", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_referral", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "rewardInfo",
    outputs: [
      { internalType: "uint256", name: "capitals", type: "uint256" },
      { internalType: "uint256", name: "statics", type: "uint256" },
      { internalType: "uint256", name: "directs", type: "uint256" },
      { internalType: "uint256", name: "level4Freezed", type: "uint256" },
      { internalType: "uint256", name: "level4Released", type: "uint256" },
      { internalType: "uint256", name: "level5Left", type: "uint256" },
      { internalType: "uint256", name: "level5Freezed", type: "uint256" },
      { internalType: "uint256", name: "level5Released", type: "uint256" },
      { internalType: "uint256", name: "star", type: "uint256" },
      { internalType: "uint256", name: "luck", type: "uint256" },
      { internalType: "uint256", name: "top", type: "uint256" },
      { internalType: "uint256", name: "split", type: "uint256" },
      { internalType: "uint256", name: "splitDebt", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "starPool",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "teamUsers",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "topPool",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalUser",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_receiver", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "transferBySplit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userInfo",
    outputs: [
      { internalType: "address", name: "referrer", type: "address" },
      { internalType: "uint256", name: "start", type: "uint256" },
      { internalType: "uint256", name: "level", type: "uint256" },
      { internalType: "uint256", name: "maxDeposit", type: "uint256" },
      { internalType: "uint256", name: "totalDeposit", type: "uint256" },
      { internalType: "uint256", name: "teamNum", type: "uint256" },
      { internalType: "uint256", name: "maxDirectDeposit", type: "uint256" },
      { internalType: "uint256", name: "teamTotalDeposit", type: "uint256" },
      { internalType: "uint256", name: "totalFreezed", type: "uint256" },
      { internalType: "uint256", name: "totalRevenue", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "userLayer1DayDeposit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const financeAppTokenAddress =
  "0x2B9a218Fbc09Ccf79ae61B19CdD0873fEaA062a2";
export const financeAppTokenAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "Mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];
