module.exports = (app) => {
  app.route("/signin", (req, res) => {
    console.log("Just got a request!");
    let response = {
      success: 1,
      message: "you bro done it",
    };
    res.send(response);
  });
};
