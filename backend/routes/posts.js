import express from "express";
import { getLoremIpsum } from "../utils/lorem.js";
const router = express.Router();

// Helper to generate a single fake post
function generateFakePost(id) {
  const authors = ["Anna", "Bartek", "Cezary", "Daria", "Ewa"];
  return {
    id,
    author: authors[Math.floor(Math.random() * authors.length)],
    description: getLoremIpsum(50),
    image: `https://picsum.photos/seed/${id}/400/400`,
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 100000000),
    ).toISOString(),
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 10),
  };
}

// GET /api/posts?offset=0&limit=5
router.get("/", (req, res) => {
  const offset = parseInt(req.query.offset) || 0;
  const limit = parseInt(req.query.limit) || 5;
  const posts = [];
  for (let i = offset; i < offset + limit; i++) {
    posts.push(generateFakePost(i + 1));
  }
  res.json({ posts });
});

export default router;
