import "@nomiclabs/hardhat-ethers"
import pkg from 'hardhat';
const {ethers} = pkg;

async function deploy(){
    const HelloWorld = await ethers.getContractFactory("HelloWorld")
    const hello = await HelloWorld.deploy()
    await hello.deployed()

    return hello
}

async function sayHello (hello) {
   console.log( await hello.Hello());
   
}

deploy().then(sayHello)