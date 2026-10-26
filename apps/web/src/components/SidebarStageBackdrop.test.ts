import { describe, expect, it } from "vite-plus/test";

import {
  resolveEnvironmentIdentificationPillLabel,
  resolveSidebarStageBackdropVariant,
} from "./SidebarStageBackdrop";

describe("resolveEnvironmentIdentificationPillLabel", () => {
  it("keeps upstream's Nightly label when the build sets no override", () => {
    expect(resolveEnvironmentIdentificationPillLabel("Nightly")).toBe("Nightly");
    expect(resolveEnvironmentIdentificationPillLabel("nightly", undefined)).toBe("Nightly");
    expect(resolveEnvironmentIdentificationPillLabel("Nightly", "  ")).toBe("Nightly");
  });

  it("shows the build's label for the nightly stage only", () => {
    expect(resolveEnvironmentIdentificationPillLabel("Nightly", " Luxe ")).toBe("Luxe");
    expect(resolveEnvironmentIdentificationPillLabel("Dev", "Luxe")).toBe("Dev");
    expect(resolveEnvironmentIdentificationPillLabel("Beta", "Luxe")).toBeNull();
  });

  it("leaves the nightly artwork keyed to the stage, not the label", () => {
    expect(resolveSidebarStageBackdropVariant("Nightly")).toBe("nightly");
  });
});
