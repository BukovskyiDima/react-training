import React from "react";
import { shallow } from "enzyme";
import GifItem from "./GifItem";

describe('<GifItem/>', () => {

    it('should render item id', () => {
        const wrapper = shallow(<GifItem/>);

        expect(wrapper.isEmptyRender()).toBe(true);

        wrapper.setProps({
            item: {
                images: {
                    original: {
                        mp4: 'src for mp4',
                    },
                },
                title: 'must be title',
            }
        });

        expect(wrapper.find('span').text()).toBe('must be title');
    })
});
