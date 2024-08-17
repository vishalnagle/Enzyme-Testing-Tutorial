import News from "../components/News";
import { shallow } from "enzyme";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ id: 3 }),
    })
);


describe("instance, state, props etc testing", () => {

    test("instance testing", async () => {
        const wrapper = shallow(<News />)
        const instance = wrapper.instance();
        const anyFn = instance.checkBoxChecked()
        expect(anyFn).toEqual({ id: 3 })
    })

    test("promises testing", async () => {
        let wrapper = shallow(<News />)

        return wrapper.instance().loadData().then((data) => {
            expect(data).toEqual({ me: 12 })
        })
    })

    test("jest spyOn componentDidMount", () => {
        jest.spyOn(News.prototype, "componentDidMount");
        shallow(<News />)
        expect(News.prototype.componentDidMount).toHaveBeenCalled()
        News.prototype.componentDidMount.mockRestore()
    })

    test("check a function called times", () => {
        let wrapper = shallow(<News />)
        const btn = wrapper.find("button")
        btn.simulate("click")
    })


    test("state update check",()=>{
        let wrapper = shallow(<News/>)
        return wrapper.instance().loadData().then((data)=>{
            expect(wrapper.state().newsCount).toBe(50)
        })
    })


    test("props check",()=>{
        let wrapper = shallow(<News/>);
        let inputProps = wrapper.find("input").props()
        const matchProps =  {
            type:'text',
            id: 'firstname',
            value: 'codeimprove',
            name: 'firstname'
          }
        expect(inputProps).toEqual(matchProps)
    })


})