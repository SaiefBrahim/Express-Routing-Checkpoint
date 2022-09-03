exports.getServices = (req, res, next) => {
  const date = new Date();
  const day = date.getDay().toString();
  const hour = date.getHours().toString();

  day.match(/[1-6]/g) && hour.match(/(0[0-1]|1[0-6])/)
    ? res.render("services", { title: "Services Page" })
    : next();
};
