MATH-398: Advanced Cryptography
Bryan Jensen
April 5, 2015

Bitcoin Notes

https://bchain.info/BTC/

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

<!-- ================================================== -->

Slides:
+ Intro Slide
    * Bitcoin
    * New type of currency
    * Invented in 2009 by "Satoshi Nakamoto"
        - Mysterious figure/group, not going to focus on him
    * First currency to not be backed by a central authority
    * First "cryptocurrency"
    * First purely digital currency
    * I will preface much of my presentation with:
        - Even though Bitcoin is supposed to be transparent, and open, it is a very confusing topic to research and it is quite possible that my information may be incorrect
        - Many sources contradict each other and are otherwise unclear
        - I may contradict myself - If I do, call me on it, and I'll try to elaborate
+ What can you use Bitcoin for? It's a currency after all
    * Progressive businesses
        - Food trucks
        - Amazon
        - Target
        - Home Depot
+ How the system works
    * Bitcoins are spent by "signing" away in a transaction
        - Public-key cryptosystem
        - This is the only real use of cryptography in the Bitcoin system
        - Bitcoins are "owned" by a private key, lose that and you lose the coins
            + Usually, people use their phone or something to remember their private key, and don't memorize it
    * How new bitcoins are created
        - Usually, gov't prints new bills
        - "Mining" - we'll get back to this
+ Issues
    * When spending isn't based on physical paper money, issues arise
        - Double-spending
            + I have 5 Bitcoin
            + I say to physical Person 1 "I'll give you 5 Bitcoin for a burrito"
                * They give me a burrito
            + I say to online Person 2 "I'll buy that watch for 5 Bitcoin"
                * They send me the watch in the mail
            + I spent my 5 Bitcoin twice, and someone's been cheated
+ The Network and "Mining"
    * Remember when I mentioned that I would come back to "mining"? This is it
        - The "miners" are the computers on the network, that do all the work
            + Rewards for doing the work are brand new bitcoins, hence the demand
    * To understand "mining" bitcoins, we have to understand the point of the network
        - It prevents things like double-spending
    * Accomplished by blocks and the block-chain
        - Essentially just mass-agreement
        - People buys things in transactions of the form: “payer X sends Y bitcoins to payee Z”
        - Transactions are consolidates and grouped into a block
        - Blocks are hashed, along with a hash of the previous block, by the miners - that is their entire job, that is "mining"
        - Because each block has an element of the previous blocks (their hash), it forms a "chain"
+ Security
    * Each block contains an element of every previous block
        - If a transaction were to be modified, they would have to modify every following block in the chain for everything to appear correct
        - The reason this is infeasible is because the task of hashing a block is specifically chosen to be hard
            + *Difficulty target* chosen to make the block creation ~10 minutes
    * Public key cryptography protects "ownership" of the bitcoins
        - Uses ECSDA
            + Elliptic Curve Digital Signature Algorithm
            + Doesn't use RSA, it's a distinct specific algorithm by National Institute of Standards and Technology, by a former NSA employee
        - No extra security to protect your money - You lose your key, the coins are gone
    * Security based on the fact that an attacker would have to have 51% of the computing power of the entire system to keep ahead of the new blocks being made, and create new malicious blocks
        - Hence incentivizing mining with new Bitcoins