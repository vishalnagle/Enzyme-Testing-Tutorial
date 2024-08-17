

import Home from "../components/Home";
import {shallow} from "enzyme"

describe("Shallow homepage",()=>{
    test("wrapper css class check",()=>{
        const wrapper = shallow(<Home/>)
        expect(wrapper.exists(".home-cls")).toEqual(true)
    })
})
