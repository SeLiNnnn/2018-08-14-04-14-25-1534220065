const main = require("../main/main")

describe("main()", () => {
  it("should return 910", () => {
    let actual = main("910")
    expect(actual).toBe("._. ... ._.\n" + "|_| ..| |.|\n" + "..| ..| |_|\n")
  })

  it("should return 256", () => {
    let actual = main("256")
    expect(actual).toBe("._. ._. ._.\n" + "._| |_. |_.\n" + "|_. ._| |_|\n")
  })

  it("should return 7", () => {
    let actual = main("7")
    expect(actual).toBe("._.\n" + "..|\n" + "..|\n")
  })
})
