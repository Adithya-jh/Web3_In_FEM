import "@nomiclabs/hardhat-ethers"
import pkg from 'hardhat';
const {ethers} = pkg;

async function deploy(){
    const Counter = await ethers.getContractFactory("Counter")
    const counter = Counter.deploy()

    await counter.deployed();
    return counter;
}

async function count(counter){
    console.log("Counter", await counter.count())
}

deploy().then(count)