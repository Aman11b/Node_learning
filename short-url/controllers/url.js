const { nanoid } = require("nanoid");
const URL = require("../models/url");
async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });
  const shortID = nanoid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistroy: [],
  });

  return res.render("home", { id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistroy.length,
    analytics: result.visitHistroy,
  });
}

async function handleRedirect(req, res) {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistroy: {
          timestamp: Date.now(),
        },
      },
    },
  );

  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  return res.redirect(entry.redirectURL);
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleRedirect,
};
