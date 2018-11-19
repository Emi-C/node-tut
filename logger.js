const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(msg) {
    console.log(msg);
    this.emit("msgLogged", { id: 1, url: "www.pippo.it" });
  }
}
module.exports = Logger;
