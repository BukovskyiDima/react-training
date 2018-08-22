import React from 'react';
import { shallow } from 'enzyme';
import { Home } from "./Home";

describe('<Home/>', () => {

	it('should render error', () => {
		const handleValueChange = jest.fn();
		const wrapper = shallow(<Home handleValueChange={handleValueChange}/>);

		expect(wrapper.find('.loading').length).toBe(0);

		wrapper.setProps({
			error: 'An error'
		});

        expect(wrapper.find('.loading').length).toBe(1);
		expect(wrapper.find('.loading').text()).toBe('An error');
	});

});


