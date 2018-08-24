import React from 'react';
import { shallow } from 'enzyme';
import GifsHolder from "./GifsHolder";

describe('<GifsHolder/>', () => {

    it('should render error', () => {

        const wrapper = shallow(<GifsHolder
            items={[]}
        />);

        expect(wrapper.find('.items-holder').children()).toHaveLength(0);
        console.log(wrapper.debug('.items-holder'));

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
            ]
        });

        expect(wrapper.find('.items-holder').children()).toHaveLength(3);
    });

});