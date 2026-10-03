// Keep the enquiry number out of rendered HTML. The public redirect is discoverable.
export function GET(request) {
  const topic = new URL(request.url).searchParams.get("topic");
  const text = topic === "booth" ? "Hi, I'd like to enquire about an SPL Bengaluru booth." : "Hi, I'd like to enquire about SPL Bengaluru.";
  const destination = new URL("https://wa.me/919945958602");
  destination.searchParams.set("text", text);
  return Response.redirect(destination, 302);
}
