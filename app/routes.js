module.exports = (app)=>{
    app.use("/signin", (req, res) => {
      res.json({ message: "Hello From Express App" });
    });


}