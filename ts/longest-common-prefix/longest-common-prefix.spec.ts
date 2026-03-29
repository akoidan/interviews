import {longestCommonPrefix} from "./longest-common-prefix";

describe("longestCommonPrefix", () => {
  it("[\"flower\",\"flow\",\"flight\"] fl", () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl")
  });
    it(" ", () => {
    expect(longestCommonPrefix([""])).toBe("")
  });
  it(" 2", () => {
    expect(longestCommonPrefix(["", "asdasd"])).toBe("")
  });
  it(" 3", () => {
    expect(longestCommonPrefix(["12312", ""])).toBe("")
  });
  it(" 4", () => {
    expect(longestCommonPrefix(["asdfasd", "3sdas"])).toBe("")
  });
  it(" 6", () => {
    expect(longestCommonPrefix(["asd", "asd", "asdasdas12"])).toBe("asd")
  });
});
