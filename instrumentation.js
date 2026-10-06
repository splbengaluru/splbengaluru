import { BatchLogRecordProcessor, LoggerProvider } from "@opentelemetry/sdk-logs";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";

function createLoggerProvider() {
  const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!apiKey || !host) return null;

  return new LoggerProvider({
    resource: resourceFromAttributes({ "service.name": "spl-blr" }),
    processors: [
      new BatchLogRecordProcessor({
        exporter: new OTLPLogExporter({
          url: new URL("/i/v1/logs", host).toString(),
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }),
      }),
    ],
  });
}

export const posthogLoggerProvider = createLoggerProvider();
export const posthogLogger = posthogLoggerProvider?.getLogger("spl-blr.posthog-integration");

export function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  if (!posthogLoggerProvider && process.env.NODE_ENV === "development") {
    const missingVariable = process.env.NEXT_PUBLIC_POSTHOG_KEY ? "NEXT_PUBLIC_POSTHOG_HOST" : "NEXT_PUBLIC_POSTHOG_KEY";
    throw new Error(`${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`);
  }
}
