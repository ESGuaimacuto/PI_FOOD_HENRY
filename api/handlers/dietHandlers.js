const { getAllDiets } = require("../controllers/dietController");

const getDietHandler = async (req, res) => {
  try {
    console.log("Estoy en el handler diet");
    const responseAll = await getAllDiets();
    res.status(200).json(responseAll);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDietHandler,
};
