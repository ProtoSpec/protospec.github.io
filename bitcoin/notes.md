MATH-398: Advanced Cryptography
Bryan Jensen
April 5, 2015

Bitcoin Notes

+ Based off of transactions
    * “payer X sends Y bitcoins to payee Z”
    * Broadcast to network
        - “Miners” running Bitcoin software, are the nodes in the network
            + New block created from all transactions every ~10 minutes
            + Constantly building the block chain
            + Each block incorporates an element of the entire preceeding chain
                * SHA-256 Hash
        - Proof-of-work
                * Hash the new block so that it is less than a difficulty target, using a nonce 
                    - Must take ~10 minutes
    * Miner creates new block, broadcasts to all other nodes
        - First one to do so gets the bitcoin?
+ Security/Cryptography
    * Nothing is encrypted, just hashed
    * No central authority
        - Security is based off of difficulty of reproducing all of the proof-of-work that has already been done
        - Since all blocks have an element of the previous blocks, then have to reproduce the 10-minute proof-of-work for each block since the one you want to modify
