import { query } from "../config/db.js";

export const getHealth = (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
};

export const getDbHealth = async (req, res) => {
  const { rows } = await query("SELECT NOW() AS now");
  res.json({ status: "ok", db: "connected", time: rows[0].now });
};
