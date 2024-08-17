import Blog from "../components/Blog";
import { shallow } from "enzyme";

describe("Blog component testing",()=>{

    test("class count check",()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find(".liCls").length).toBe(3)
    })

    test("at and key check",()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find(".liCls").at(0).key()).toBe("angular")
    })

    test("child check",()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find(".numbers").childAt(0).type()).toBe("span")
    })

    test("children length check",()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find("ul").children().length).toBe(3)
    })

    test("check class present",()=>{
        let wrapper = shallow(<Blog/>);
        expect(wrapper.find(".my-button").hasClass("disabled")).toBe(true)
    })
})