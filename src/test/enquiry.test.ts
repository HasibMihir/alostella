import { describe, expect, it } from "vitest";
import { prepareEnquiry } from "@/lib/enquiry";
const valid = {
  name: "Alex Example",
  email: "alex@example.com",
  service: "Both",
  projectType: "Wedding",
  date: "",
  location: "",
  budget: "",
  details: "Photography and film for our wedding.",
};
describe("Enquiry requirements", () => {
  it("requires full name", () => expect(prepareEnquiry({ ...valid, name: "" }).valid).toBe(false));
  it("requires a valid email address", () =>
    expect(prepareEnquiry({ ...valid, email: "not-an-email" }).valid).toBe(false));
  it("requires project details", () =>
    expect(prepareEnquiry({ ...valid, details: " " }).valid).toBe(false));
  it("accepts optional date, location and budget being empty", () =>
    expect(prepareEnquiry(valid).valid).toBe(true));
  it("accepts only the four service choices", () => {
    for (const service of ["Photography", "Videography", "Both", "Other"])
      expect(prepareEnquiry({ ...valid, service }).valid).toBe(true);
    expect(prepareEnquiry({ ...valid, service: "Unknown" }).valid).toBe(false);
  });
  it("accepts only the six project types", () => {
    for (const projectType of [
      "Wedding",
      "Event",
      "Commercial",
      "Brand Content",
      "Portrait",
      "Other",
    ])
      expect(prepareEnquiry({ ...valid, projectType }).valid).toBe(true);
    expect(prepareEnquiry({ ...valid, projectType: "Unknown" }).valid).toBe(false);
  });
  it("never reports delivery without a configured destination", () =>
    expect(prepareEnquiry(valid).sent).toBe(false));
});
