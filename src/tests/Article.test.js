import Article from "../components/Article";
import Table from "../components/Table";
import { shallow,mount } from "enzyme";


describe("Article page",()=>{

    test("click count",()=>{
        let wrapper = shallow(<Article/>)
        expect(wrapper.find(".clicks-0").length).toEqual(1)
    })

    test("click button",()=>{
        let wrapper = shallow(<Article/>)
        wrapper.find("button").simulate("click")
    })

    test("using dive",()=>{
        let wrapper = shallow(<Article/>)
        expect(wrapper.find(Table).dive().find(".custom-border").length).toBe(1)
    })

    test("using snapshot",()=>{
        let wrapper = shallow(<Table/>)
        expect(wrapper).toMatchSnapshot()
    })

})

describe("Mount vs shallow",()=>{
    test("logging shallow",()=>{
        let wrapper = shallow(<Article/>)
        console.log("shallow",wrapper.debug())
    })

    test("logging mount",()=>{
        let wrapper = mount(<Article/>)
        console.log("mount",wrapper.debug())
    })
})