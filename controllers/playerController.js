const playerService = require("../services/playerService");

exports.getPlayerStats = async (req, res) => {
  try {
    const playerId = req.params.playerId;
    const playerStats = await playerService.getPlayerStats(playerId);
    res.status(200).json(playerStats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
