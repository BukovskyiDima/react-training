import React from 'react';
import { shallow } from 'enzyme';
import { Random }from "./Random";

describe('<Random/>', () => {

    it('should render button click', () => {
        const getRandomGif = jest.fn();

        const wrapper = shallow(<Random getRandomGif={getRandomGif}/>);

        expect(getRandomGif.mock.calls.length).toBe(1);

        wrapper.find('.btn').simulate('click', () => {});

        expect(getRandomGif.mock.calls.length).toBe(2);
    });

});

