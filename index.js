const dynamicsClient = require('./dynamics-client.js');

(async () => {
    try {
        var result = await dynamicsClient.retrieveAllRequest({ collection: 'contacts', top: 1 });
        console.log(result);
    } catch (e) {
        console.log(e)
    }
})();