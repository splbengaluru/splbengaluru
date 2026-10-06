import { PostHog } from "posthog-node";

export async function captureServerEvent({ distinctId, event, properties }) {
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!apiKey || !host) {
    if (process.env.NODE_ENV === "development") {
      const missingVariable = apiKey ? "NEXT_PUBLIC_POSTHOG_HOST" : "NEXT_PUBLIC_POSTHOG_KEY";
      console.error(`${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`);
    }
    return;
  }

  try {
    const posthog = new PostHog(apiKey, {
      host,
      flushAt: 1,
      flushInterval: 0,
      enableExceptionAutocapture: true,
    });
    posthog.capture({ distinctId, event, properties });
    await posthog.shutdown();
  } catch (error) {
    console.error("PostHog server event capture failed", error);
  }
}
