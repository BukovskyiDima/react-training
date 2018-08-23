import React from 'react';
import { shallow } from 'enzyme';
import { Home } from "./Home";
import GifsHolder from "../../../Components/GifsHolder/GifsHolder";

describe('<Home/>', () => {

	it('should render error', () => {
		const handleValueChange = jest.fn();
		const gifRequest = jest.fn();
		const gifSearchRequest = jest.fn();

		const wrapper = shallow(<Home
			handleSearchRequestQuery={handleValueChange}
			gifRequest={gifRequest}
			gifSearchRequest={gifSearchRequest}
		/>);

		expect(wrapper.exists('.error')).toBe(false);

		wrapper.setProps({
			error: 'An error'
		});

		expect(wrapper.find('.error').text()).toBe('An error');
		expect(wrapper.exists('.item-holder')).toBe(false);
	});

	it('should render handleSearchRequestQuery', () => {
		const handleSearchRequestQuery = jest.fn();
		const gifRequest = jest.fn();
		const gifSearchRequest = jest.fn();

		const wrapper = shallow(<Home
			handleSearchRequestQuery={handleSearchRequestQuery}
			gifRequest={gifRequest}
			gifSearchRequest={gifSearchRequest}
		/>);

		expect(handleSearchRequestQuery.mock.calls.length).toBe(0);

		wrapper.find('input').simulate('change', {target: {value: 'Hola!'}});

		expect(handleSearchRequestQuery.mock.calls.length).toBe(1);
		expect(handleSearchRequestQuery.mock.calls[0][0]).toBe('Hola!')
	})

});

