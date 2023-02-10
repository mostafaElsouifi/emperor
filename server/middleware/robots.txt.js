export default function ({ route, res }) {
  res.setHeader("Content-Type", "text/plain");
  if (process.env.NODE_ENV === "production") {
    res.end("User-agent: *\nDisallow: /");
  } else {
    res.end("User-agent: *\nDisallow:");
  }
}
