import { getBlockchainsCollection } from "../gateway/mongo.js"

export const createBlockchain = async (blockchain) => {
    const col = await getBlockchainsCollection();
    const { insertedId } = await col.insertOne(blockchain);
    // TO DO: we should validate name is unique;
    return insertedId;
};

export const getBlockchain = async (name) => {
    const col = await getBlockchainsCollection();
    // TO DO: filter by deletedAt flag so we don't return deleted blockchains
    const blockchain = await col.findOne({ name }).toArray();

    return blockchain;
};

export const getBlockchains = async () => {
    const col = await getBlockchainsCollection();
    // TO DO: filter by deletedAt flag so we don't return deleted blockchains
    const blockchains = await col.find({}).toArray();

    return blockchains;
};

export const updateBlockchain = async (name, updateObject) => {
    const col = await getBlockchainsCollection();
    // TO DO: update should not allow the name field to be updated;
    await col.updateOne({ name }, { $set: updateObject });
};

export const deleteBlockchain = async (name) => {
    await updateBlockchain(name, { deletedAt: new Date() });
};