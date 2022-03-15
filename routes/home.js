import express from "express";
const router = express.Router();

router.get('/',(request,response)=>{
    response.send(`
        <h1>Home page</h1>
        <h4>Welcome to CiDii</h4>
    `);
});
export default router;