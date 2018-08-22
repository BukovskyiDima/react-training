import React from 'react';
import { shallow } from 'enzyme';
import { Home } from "./Home";

describe('<Home/>', () => {

	it('should render error', () => {
		const wrapper = shallow(<Home/>);

		expect(wrapper.find('.error').text()).toBe('');

		wrapper.setProps({
			error: 'An error'
		});

		expect(wrapper.find('.error').text()).toBe('An error');
	});

	it('should render handleValueChange', () => {
		const handleValueChange = jest.fn();
		const wrapper = shallow(<Home handleValueChange={handleValueChange}/>);

		console.dir(wrapper.find('input'));
		expect(wrapper.find('input').value).toBe();

		wrapper.find('input').simulate('change', {target: {value: 'My new value'}});

		expect(wrapper.find('.input').value).toBe('My new value')
	})

});

