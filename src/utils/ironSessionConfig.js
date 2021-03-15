export default {
    cookieName: "USER",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.IRON_SESSION_SECRET
};