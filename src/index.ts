import app from "./server";
import config from "./config/config";
import prisma from "./db/client";

const PORT = config.app.PORT

app.listen(PORT, async () => {
    try {
        await prisma.$connect();
        console.log(`Server is running on port ${PORT} and is connected to db`);
    } catch (error) {
        console.error(`Error connecting to database: ${error}`);
    }
});