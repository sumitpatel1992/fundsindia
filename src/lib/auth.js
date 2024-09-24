// lib/auth.js
import jwt from "jsonwebtoken";

export const verifyAuth = async (req) => {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return null;
    }

    const token = authHeader.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return user;
  } catch (error) {
    return null;
  }
};
