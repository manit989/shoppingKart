import { serve } from "bun";
import index from "./index.html";

const brochurePath = "./AVIMA Seating Smart Office Solutions.pdf";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/avima-brochure.pdf": {
      GET() {
        return new Response(Bun.file(brochurePath), {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'inline; filename="avima-brochure.pdf"',
          },
        });
      },
    },

    "/brochure.pdf": {
      GET() {
        return new Response(Bun.file("./brochure.pdf"), {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'attachment; filename="brochure.pdf"',
          },
        });
      },
    },

    "/assets/logo.jpg": {
      GET() {
        return new Response(Bun.file("./assets/logo.jpg"), {
          headers: {
            "Content-Type": "image/jpeg",
          },
        });
      },
    },

    "/assets/customers/:filename": async (req) => {
      const filename = req.params.filename;
      const filePath = `./assets/customers/${filename}`;
      const file = Bun.file(filePath);
      if (await file.exists()) {
        return new Response(file);
      }
      return new Response("Not found", { status: 404 });
    },

    "/assets/carousel/:filename": async (req) => {
      const filename = req.params.filename;
      const filePath = `./assets/carousel/${filename}`;
      const file = Bun.file(filePath);
      if (await file.exists()) {
        return new Response(file);
      }
      return new Response("Not found", { status: 404 });
    },

    "/assets/products/:filename": async (req) => {
      const filename = req.params.filename;
      const filePath = `./assets/products/${filename}`;
      const file = Bun.file(filePath);
      if (await file.exists()) {
        return new Response(file);
      }
      return new Response("Not found", { status: 404 });
    },

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
