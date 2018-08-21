import React from 'react';
import { shallow } from 'enzyme';
import { Home } from "./Home";

describe('<Home/>', () => {

	it('should render error', () => {
		const getSearchGifs = jest.fn();
		const wrapper = shallow(<Home getSearchGifs={getSearchGifs}/>);

		expect(wrapper.find('.error').length).toBe(0);

		wrapper.setProps({
			error: 'An error'
		});

		expect(wrapper.find('.error').length).toBe(1);
		expect(wrapper.find('.error').text()).toBe('An error');
	});

	// it('should render error', () => {
	// 	const getSearchGifs = jest.fn();
	// 	const wrapper = shallow(<Home getSearchGifs={getSearchGifs}/>);
	//
	// 	expect(wrapper.find('.error').length).toBe(0);
	//
	// 	wrapper.setProps({
	// 		error: 'An error'
	// 	});
	//
	// 	expect(wrapper.find('.error').length).toBe(1);
	// 	expect(wrapper.find('.error').text()).toBe('An error');
	// });
	//
	// it('should call getSearchGifs ', () => {
	// 	const getSearchGifs = jest.fn();
	//
	// 	const wrapper = shallow(<Home getSearchGifs={getSearchGifs}/>);
	//
	// 	expect(getSearchGifs.mock.calls.length).toBe(1);
	//
	// 	wrapper.find('.query').simulate('change', {target: {value: 'Hola!'}});
	//
	// 	expect(getSearchGifs.mock.calls.length).toBe(2);
	// 	expect(getSearchGifs.mock.calls[1][0]).toBe('Hola!');
	// });

});


