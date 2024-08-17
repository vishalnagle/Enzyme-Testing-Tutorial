import { shallow } from "enzyme";
import Forms from "../components/Forms";

describe("Functional test", () => {

    test("state test", () => {
        const wrapper = shallow(<Forms />);
        wrapper.find(".changeBtn").simulate("click");
        expect(wrapper.find("p").text()).toBe("No")
    })

    test("gender state", () => {
        const wrapper = shallow(<Forms />)
        const btn = wrapper.find("button").last();
        btn.simulate("click", {
            target: {
                getAttribute: function () {
                    return btn.props()["data-gender"]
                }
            }
        })

        expect(wrapper.find(".box.female").length).toEqual(1)
    })




})
