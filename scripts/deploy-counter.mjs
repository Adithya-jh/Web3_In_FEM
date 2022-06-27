import "@nomiclabs/hardhat-ethers"
import pkg from 'hardhat';
const {ethers} = pkg;

async function deploy(){
    const Counter = await ethers.getContractFactory("Counter")
    const counter = await Counter.deploy()

    await counter.deployed();
    return counter;
}

async function count(counter){
    await counter.count()
    console.log("Counter",await counter.getCounter());
}

deploy().then(count)