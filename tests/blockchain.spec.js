import { createBlockchain } from "../src/services/blockchain.services"

// describe what test is doing (first parameter says how you want to name it, and 2nd is an anonymous function) 
describe('Blockchain Test Suite', () => {
    it('Creates a Blockchain', async () => {
        await createBlockchain({           // calling function to test the code
            name: 'Solana',
            language: 'Rust',
            marketCap: 1, 
            supportsSmartContracts: true,
        })
    })
}) 