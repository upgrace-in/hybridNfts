const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

let web3Modal, provider, web3, contract, user_address, checkInterval

let publicMint = false
var mint_count = 1;
var max_count = 1;
var mint_costs = 0.125; // Change cost here
var chainId = 4; // should be 4 for rinkeby and 1 for mainnet

var t_address = "0xCb1F6625cBc3eC1165bF36CffE18231d144A3790"
var t_abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }], "name": "AirDrop", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "MaxMintPublic", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MaxMintWL1", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MaxMintWL2", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MaxMintWL3", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PublicCost", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SalePaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SetReveal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "WL1Addresses", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "WL2Addresses", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "WL3Addresses", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "WLCost", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "WLPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }], "name": "WL_mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseExtension", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "isWhitelistedRole1", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "isWhitelistedRole2", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "isWhitelistedRole3", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "notRevealedUri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_mintAmount", "type": "uint256" }], "name": "ownerMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "pauseContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reveal", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseExtension", "type": "string" }], "name": "setBaseExtension", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_newBaseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_MaxMintPublic", "type": "uint8" }], "name": "setMaxMintPublic", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_MaxMintWL1", "type": "uint8" }], "name": "setMaxMintWL1", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_MaxMintWL2", "type": "uint8" }], "name": "setMaxMintWL2", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_MaxMintWL3", "type": "uint8" }], "name": "setMaxMintWL3", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_notRevealedURI", "type": "string" }], "name": "setNotRevealedURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_PublicCost", "type": "uint256" }], "name": "setPublicCost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_WLCost", "type": "uint256" }], "name": "setWLCost", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_state", "type": "bool" }], "name": "setWLPaused", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "walletOfOwner", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_users", "type": "address[]" }], "name": "whitelistUsers1", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_users", "type": "address[]" }], "name": "whitelistUsers2", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_users", "type": "address[]" }], "name": "whitelistUsers3", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "payable", "type": "function" }]

function init() {

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: "c0db0b85222f4f5c82dd2bed1fc843f9",
            }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
    });

}

function truncateString(str, length) {
    return str.length > length ? str.substring(0, length - 1) + '.....' : str
}

async function update_cost() {
    if (publicMint === false) {
        await contract.methods.WLCost().call().then(function (res, err) {
            if (res) {
                mint_costs = parseFloat(web3.utils.fromWei(res, 'ether'))
            }
        });
    } else {
        await contract.methods.PublicCost().call().then(function (res, err) {
            if (res) {
                mint_costs = parseFloat(web3.utils.fromWei(res, 'ether'))
            }
        });
    }
}

function setmaxCount(res) {
    if (res) {
        max_count = res
    }
}

async function checkMintLimit(type) {
    if (type == 'wl') {
        await contract.methods.isWhitelistedRole1(user_address).call().then(async function (res, err) {
            if (res !== true) {
                await contract.methods.isWhitelistedRole2(user_address).call().then(async function (res, err) {
                    if (res !== true) {
                        await contract.methods.isWhitelistedRole3(user_address).call().then(async function (res, err) {
                            if (res === true) {
                                await contract.methods.MaxMintWL3().call().then(async function (res, err) {
                                    setmaxCount(res)
                                });
                            } else {
                                $('#mint_btn').fadeOut()
                                max_count = 1                            
                                alert("You are not whitelisted !!!")
                            }
                        });
                    } else {
                        await contract.methods.MaxMintWL2().call().then(async function (res, err) {
                            setmaxCount(res)
                        });
                    }
                });
            } else {
                await contract.methods.MaxMintWL1().call().then(async function (res, err) {
                    setmaxCount(res)
                });
            }
        });
    } else if (type == 'public') {
        await contract.methods.MaxMintPublic().call().then(async function (res, err) {
            setmaxCount(res)
        });
    }
    set_value(1)
}

async function update_publicMint() {
    await contract.methods.WLPaused().call().then(async function (res, err) {
        if (res !== false) {
            publicMint = true
            await checkMintLimit('public')
        } else {
            publicMint = false
            await checkMintLimit('wl')
        }
    });

}

function after_mint(res) {
    if (res) {
        alert("MINTED SUCCESSFULLY!")
    } else {
        alert("MINTING FAILED!")
    }
    location.reload()
}

async function WLMint(final_cost, mint_count) {
    var final_wei_Val = (final_cost * Math.pow(10, 18)).toFixedSpecial(0)
    await contract.methods.WL_mint(String(mint_count))
        .send({
            from: user_address,
            value: final_wei_Val
        }).then(function (res, err) {
            after_mint(res)
        });

}

async function public_Mint(final_cost, mint_count) {
    var final_wei_Val = (final_cost * Math.pow(10, 18)).toFixedSpecial(0)
    await contract.methods.mint(String(mint_count))
        .send({
            from: user_address,
            value: final_wei_Val
        }).then(function (res, err) {
            after_mint(res)
        });
}

async function switch_network(chainId) {
    await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: web3.utils.toHex(chainId) }]
    });
}

async function do_it_Asside() {

    $('#mint_btn').fadeIn()

    $('#mint_btn').html('....')

    // update publicmint
    await update_publicMint()

    // update cost
    await update_cost();

    $('#mint_btn').html('Mint Now');
}

function check() {
    web3.eth.getAccounts().then(async (tx) => {
        if (tx[0] !== undefined) {
            user_address = tx[0]
            $('#connect_btn').html('Connected : ' + truncateString(String(user_address), 10));

            web3.eth.net.getId().then(async (netId) => {
                if (netId === chainId) {

                    await do_it_Asside()

                    if (publicMint === false) {
                        $('#mint_btn').on('click', async () => {
                            await WLMint(mint_costs * mint_count, mint_count)
                        });
                    } else {
                        $('#mint_btn').click(async () => {
                            await public_Mint(mint_costs * mint_count, mint_count)
                        })
                    }

                } else {

                    await switch_network(chainId)

                    switch (chainId) {
                        case 1:
                            alert("Connect to ETH mainnet");
                            break;
                        case 4:
                            alert("Connect to Rinkeby");
                            break;
                    }

                }
            });
        }
    });
}

async function connectweb3() {
    try {
        provider = await web3Modal.connect();
        web3 = new Web3(provider);
        contract = new web3.eth.Contract(t_abi, t_address);
        check()
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        return;
    }

    provider.on("accountsChanged", (accounts) => {
        location.reload();
    });

    provider.on("chainChanged", (chainId) => {
        location.reload();
    });

    provider.on("networkChanged", (networkId) => {
        location.reload();
    });

}

function set_value(type) {
    if (type == 'increase') {
        if (mint_count != max_count) {
            mint_count++;
        }
    } else if (type == 'decrease') {
        if (mint_count != 1) {
            mint_count--;
        }
    } else {
        mint_count = 1
    }
    $('#mint_count').html(mint_count);
}


$(document).ready(() => {
    init();

    $('#connect_btn').click(async () => { await connectweb3(); })

    $('#increase_btn').click(() => { set_value('increase'); })

    $('#decrease_btn').click(() => { set_value('decrease'); })
});



Number.prototype.toFixedSpecial = function (n) {
    var str = this.toFixed(n);
    if (str.indexOf("e+") === -1) return str;

    str = str
        .replace(".", "")
        .split("e+")
        .reduce(function (p, b) {
            return p + Array(b - p.length + 2).join(0);
        });

    if (n > 0) str += "." + Array(n + 1).join(0);

    return str;
};