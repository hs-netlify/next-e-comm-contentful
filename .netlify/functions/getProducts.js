const fetch = require("node-fetch");

const endpoint = process.env.CONTENTFUL_URL;
const headers = {
  Authorization: `Bearer ${process.env.CONTENTFU_TOKEN}`,
};

exports.handler = async (event, context) => {
  try {
    const products = await fetch(`${endpoint}/`).JSON();
  } catch {}
  return { statusCode: 200, body: JSON.stringify({}) };
};
