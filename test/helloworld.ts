import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-waffle"
import {ethers} from "hardhat"

import {expect} from 'chai'


describe('hello world', function () {
    it("should say hi" ,async function(){
        // three important things to do
        // 1. setup 
        // 2. deploy your contract
        // 3. call our functions to test.

        const HelloWorld = await ethers.getContractFactory("HelloWorld") // give name of the contract
        const hello = await HelloWorld.deploy()

        await hello.deployed()

        expect(await hello.Hello()).to.equal("Hello,World")
    });
});