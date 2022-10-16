module.exports = (app)=>{
    app.route("/signin", (req, res) => {
      res.json({ message: "Hello From Express App" });
    });


}   