const port = 5000;
const app = require('./src/app')

const server = app.listen(port, () => {
    console.log(`running on port http://127.0.0.1:${port}`);
});
