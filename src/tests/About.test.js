import About from "../components/About";
import { shallow } from "enzyme";

describe("About Page Testing", () => {

    test("class check", () => {
        let wrapper = shallow(<About />);
        expect(wrapper.exists(".h1cls")).toEqual(true)
    })

    test("state check", () => {
        let wrapper = shallow(<About />);
        expect(wrapper.state()).toEqual({ name: "code-improve", id: 111 })
    })

    test("html check", () => {
        let wrapper = shallow(<About />);
        expect(wrapper.contains(<div className="h1cls">Hello</div>)).toEqual(true)
    })

    test("all html check", () => {
        let wrapper = shallow(<About />);
        expect(wrapper.containsAllMatchingElements([<div>Hello</div>])).toEqual(true)
    })

    test("any html check", () => {
        let wrapper = shallow(<About />);
        expect(wrapper.containsAnyMatchingElements([<div>Hello</div>, <div>Any</div>])).toEqual(true)
    })



})