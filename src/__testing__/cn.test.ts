import { cn } from "../lib/cn";
import { describe, it, expect } from "vitest";

describe("cn function", () => {
  it("should merge class names correctly", () => {
    const result = cn("text-red-500", "bg-blue-200");
    expect(result).toBe("text-red-500 bg-blue-200");
  });

  it("should handle conditional class names", () => {
    const isActive = true;
    const isDisabled = false;
    const result = cn("text-red-500", {
      "bg-blue-200": isActive,
      "opacity-50": isDisabled,
    });
    expect(result).toBe("text-red-500 bg-blue-200");
  });

  it("should resolve Tailwind class conflicts", () => {
    const result = cn("p-4", "p-6");
    expect(result).toBe("p-6");
  });

  it("should handle arrays of class names", () => {
    const result = cn(["text-red-500", "bg-blue-200"], ["p-4", "m-2"]);
    expect(result).toBe("text-red-500 bg-blue-200 p-4 m-2");
  });

  it("should handle empty inputs", () => {
    const result = cn();
    expect(result).toBe("");
  });

  it("should handle mixed inputs (strings, objects, arrays)", () => {
    const result = cn("text-red-500", { "bg-blue-200": true }, ["p-4", "m-2"]);
    expect(result).toBe("text-red-500 bg-blue-200 p-4 m-2");
  });
});
