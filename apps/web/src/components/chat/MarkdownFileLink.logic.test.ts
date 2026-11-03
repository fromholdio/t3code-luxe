import { describe, expect, it } from "vite-plus/test";

import { isSystemBrowserHtmlFile } from "./MarkdownFileLink.logic";

describe("isSystemBrowserHtmlFile", () => {
  it("accepts HTML files, including a query or fragment", () => {
    expect(isSystemBrowserHtmlFile("/tmp/report.html")).toBe(true);
    expect(isSystemBrowserHtmlFile("docs/Index.HTM")).toBe(true);
    expect(isSystemBrowserHtmlFile("/tmp/report.html#summary")).toBe(true);
  });

  it("rejects PDFs and other files", () => {
    expect(isSystemBrowserHtmlFile("/tmp/report.pdf")).toBe(false);
    expect(isSystemBrowserHtmlFile("/tmp/report.html.md")).toBe(false);
    expect(isSystemBrowserHtmlFile("/tmp/html")).toBe(false);
  });
});
