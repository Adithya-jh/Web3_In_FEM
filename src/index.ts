import {ethers} from "ethers"

function getEth(){
    //@ts-ignore
    const eth = window.ethereum
    if(!eth){
        throw new Error("Get a wallet")
    }

    return eth

}

async function hasAccounts(){
    const eth = getEth()
    const account = await eth.request({method:"eth_accounts"}) as string[]
    return account  != null && account.length
}

async function requestAccounts(){
    const eth = getEth()
    const account = await eth.request({method:"eth_requestAccounts"}) as string[]
    return account  != null && account.length
}


async function run(){
    if(!await hasAccounts() && !await requestAccounts()){
        throw new Error("Please add walled")
    }

    const hello = new ethers.Contract(
        "0x5fbdb2315678afecb367f032d93f642f64180aa3", //address
    ["function Hello() public pure returns (string memory)"], //interface (our contract)
    new ethers.providers.Web3Provider(getEth()) // signin provider
     
    )

    document.body.innerHTML = await hello.Hello()


}

run()