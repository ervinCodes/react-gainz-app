// module.exports = {
//     getIndex: (req, res) => {
//         res.send("/");
//     },
// };

module.exports = {
    getAbout: (req, res) => {
        res.send("/about");
    },
};

//In order to send data from the server to client, it must be sent using res.send
