import figlet from "figlet";
const server = Bun.serve({
  port: 80,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      const body = figlet.textSync("welcome lobby!");
      return new Response(body);
    }
    if (url.pathname === "/bread") {
      const body = figlet.textSync("BREAD");
      return new Response(body);
    } else return new Response(figlet.textSync("404"));
  },
});
