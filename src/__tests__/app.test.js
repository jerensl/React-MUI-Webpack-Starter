import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import App from "../app"

Enzyme.configure({ adapter: new Adapter() })

describe("app", () => {
  it("Should show Jerens", () => {
    const wrapper = shallow(<App />)
    const text = wrapper.find("h1")
    expect(text.text()).toBe("Hi JerenS")
  })
})
