module.exports = {
  getAll: (req, res) => {
    const dbi = req.app.get("db");

    dbi
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ error: "errors" });
        console.log(err);
      });
  }
};
