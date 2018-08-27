import React from 'react';
import { shallow } from 'enzyme';
import { Home } from "./Home";

describe('<Home/>', () => {

    let handleSearchRequestQuery,
        gifRequest,
        gifSearchRequest,
        wrapper;

    beforeEach(()=>{
        handleSearchRequestQuery = jest.fn();
        gifRequest = jest.fn();
        gifSearchRequest = jest.fn();

        wrapper = shallow(<Home
            handleSearchRequestQuery={handleSearchRequestQuery}
            gifRequest={gifRequest}
            gifSearchRequest={gifSearchRequest}
            error={''}
        />);
    });

    it('should render error', () => {

        expect(wrapper.exists('.error')).toBe(false);

        wrapper.setProps({
            error: 'An error'
        });

        expect(wrapper.find('.error').text()).toBe('An error');
        expect(wrapper.exists('.error')).toBe(true);
    });

    it('should render handleSearchRequestQuery', () => {

        expect(handleSearchRequestQuery.mock.calls.length).toBe(0);

        wrapper.find('input').simulate('change', {target: {value: 'Hola!'}});

        expect(handleSearchRequestQuery.mock.calls.length).toBe(1);
        expect(handleSearchRequestQuery.mock.calls[0][0]).toBe('Hola!')
    });

    it('should render items', () => {

        console.log(wrapper.find('.items-holder').children().length);
        expect(wrapper.find('.items-holder').children().length).toBe(0);

        wrapper.setProps({
            items: [
                {
                    id: 'rmxJML4JEeY4E',
                    url: 'https://giphy.com/gifs/car-rmxJML4JEeY4E',
                    images: {
                        original: {
                            mp4: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy.mp4',
                        },
                        title: 'car GIF',
                    }
                },
                {
                    id: 'rmxJML4JEeY4E',
                    url: 'https://giphy.com/gifs/car-rmxJML4JEeY4E',
                    images: {
                        original: {
                            mp4: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy.mp4',
                        },
                        title: 'car GIF',
                    }
                },
                {
                    id: 'rmxJML4JEeY4E',
                    url: 'https://giphy.com/gifs/car-rmxJML4JEeY4E',
                    images: {
                        original: {
                            mp4: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy.mp4',
                        },
                        title: 'car GIF',
                    }
                }
            ],
            error: ''
        });

        console.log(wrapper.find('.items-holder').children().length);
        expect(wrapper.find('.items-holder').children().length).toBe(3);
    });

});

