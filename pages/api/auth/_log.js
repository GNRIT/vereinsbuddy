// pages/api/auth/_log.js
export default function handler(req, res) {
    console.log("Auth Log:", req.body)
    res.status(200).json({ status: "ok" })
}
