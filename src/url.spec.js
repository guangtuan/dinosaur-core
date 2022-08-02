const impl = require("./url");

test("join url correctly", () => {
  expect(impl(["a", "b", "/c", "d/"])).toBe("a/b/c/d");
});

test("join url correctly with empty part", () => {
  expect(impl(["a", "b", "/c", "", "d/"])).toBe("a/b/c/d");
});

test("join url correctly with multi backslash", () => {
  expect(impl(["///a", "b////", "/c", "////", "", "////d////", "//"])).toBe("a/b/c/d");
});
