import { SeverityNumber } from "@opentelemetry/api-logs";
import { posthogLogger, posthogLoggerProvider } from "@/instrumentation";

export function emitPostHogLog(body, attributes) {
  posthogLogger?.emit({
    body,
    severityNumber: SeverityNumber.INFO,
    attributes,
  });
}

export async function flushPostHogLogs() {
  await posthogLoggerProvider?.forceFlush();
}
