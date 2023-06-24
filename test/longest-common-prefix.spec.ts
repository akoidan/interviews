import {expect} from "chai";
import {longestCommonPrefix} from "src/leetcode/longest-common-prefix";

describe("longestCommonPrefix", () => {
  it("[\"flower\",\"flow\",\"flight\"] fl", () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).eq("fl")
  });
    it(" ", () => {
    expect(longestCommonPrefix([""])).eq("")
  });
  it(" 2", () => {
    expect(longestCommonPrefix(["", "asdasd"])).eq("")
  });
  it(" 3", () => {
    expect(longestCommonPrefix(["12312", ""])).eq("")
  });
  it(" 4", () => {
    expect(longestCommonPrefix(["asdfasd", "3sdas"])).eq("")
  });
  it(" 6", () => {
    expect(longestCommonPrefix(["asd", "asd", "asdasdas12"])).eq("asd")
  });
});
