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

    const counter = new ethers.Contract(
        process.env.CONTRACT_ADDRESS, //address
    ["function count() public",
    " function getCounter() public view returns (uint32)"], //interface (our contract)
    new ethers.providers.Web3Provider(getEth()).getSigner() // signin provider
     
    )

    const el = document.createElement('div')
    async function setCounter(){
        el.innerHTML = await counter.getCounter()
    }

    setCounter()

    const button = document.createElement('button')
    button.innerText = "increment"

    button.onclick = async function(){
        await counter.count()
        setCounter()
    }
    // document.body.innerHTML = await counter.Hello()
    document.body.appendChild(el)
    document.body.appendChild(button)



}

run()