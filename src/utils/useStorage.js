const Cloud = require('@google-cloud/storage');
const path = require('path');
const serviceKey = path.join(__dirname, '../../public/keys.json');

const { Storage } = Cloud;
const storage = new Storage({
    keyFilename: serviceKey,
    projectId: '106114351042273149982'
});

export default storage;