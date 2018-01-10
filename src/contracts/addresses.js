// const local = {
//     VOTING_TO_CHANGE_KEYS_ADDRESS: '0x758492834ed6454f41d6d3d6b73d6e46d4555429',
//     VOTING_TO_CHANGE_MIN_THRESHOLD: '0xcbf043db3498b5064bd62341be0c0e3fb0344b1b',
//     VOTING_TO_CHANGE_PROXY: '0xcb3f870269a3f7215eb87d9548ee5b7eff6396dd',
//     BALLOTS_STORAGE_ADDRESS: '0x144947d78b932ea0dff14d75e1f7cd1b2f131426',
//     METADATA_ADDRESS: '0x3111c94b9243a8a99d5a867e00609900e437e2c0',
//     POA_ADDRESS: '0xf472e0e43570b9afaab67089615080cf7c20018d',
// }

const CORE_ADDRESSES = {
    VOTING_TO_CHANGE_KEYS_ADDRESS: '0x49df4ec19243263e5db22da5865b4f482b8323a0',
    VOTING_TO_CHANGE_MIN_THRESHOLD: '0x8829ebe113535826e8af17ed51f83755f675789a',
    VOTING_TO_CHANGE_PROXY: '0x6b728399b41a38d4109f7af2213d4cc31ca87812',
    BALLOTS_STORAGE_ADDRESS: '0x0d7590c7aedf1e7e85fc9a1ee88f6f17d3ba762f',
    METADATA_ADDRESS: '0xcBB2912666c7e8023B7ec78B6842702eB26336aC',
    POA_ADDRESS: '0x8bf38d4764929064f2d4d3a56520a76ab3df415b',
}

const SOKOL_ADDRESSES = {
    VOTING_TO_CHANGE_KEYS_ADDRESS: '0xBDa88aCf72E635C892c6fc85EDf4cE48bfB40e89',
    VOTING_TO_CHANGE_MIN_THRESHOLD: '0xEcE2a66ceb8438BFe20a08DB2Ec8Fb65E6Ee8DbF',
    VOTING_TO_CHANGE_PROXY: '0xAF7EA5AD4301aABa668766de4dCfe65F8889f2eb',
    BALLOTS_STORAGE_ADDRESS: '0xED2F95c9785E27d4b0b8BdF5c15661b5B07a07Cb',
    METADATA_ADDRESS: '0xCDC628C303430bb45f034aF8F0b6A6177Dbc4119',
    POA_ADDRESS: '0xf5cE3f5D0366D6ec551C74CCb1F67e91c56F2e34',
}

module.exports = (netId) => {
    switch (netId) {
        case '77':
            return SOKOL_ADDRESSES
        case '99':
            return CORE_ADDRESSES
        default:
            return CORE_ADDRESSES
    }
}

