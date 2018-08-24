import React from 'react';
import { shallow } from 'enzyme';
import { Home } from "./Home";

describe('<Home/>', () => {

    it('should render error', () => {
        const handleSearchRequestQuery = jest.fn();
        const gifRequest = jest.fn();
        const gifSearchRequest = jest.fn();

        const wrapper = shallow(<Home
            handleSearchRequestQuery={handleSearchRequestQuery}
            gifRequest={gifRequest}
            gifSearchRequest={gifSearchRequest}
            error={''}
        />);

        expect(wrapper.exists('.error')).toBe(false);

        wrapper.setProps({
            error: 'An error'
        });

        expect(wrapper.find('.error').text()).toBe('An error');
        expect(wrapper.contains('<GifsHolder/>')).toBe(false);
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
    });

    it('should render items', () => {
        const handleSearchRequestQuery = jest.fn();
        const gifRequest = jest.fn();
        const gifSearchRequest = jest.fn();

        const wrapper = shallow(<Home
            handleSearchRequestQuery={handleSearchRequestQuery}
            gifRequest={gifRequest}
            gifSearchRequest={gifSearchRequest}
        />);

        expect(wrapper.contains('<GifsHolder/>')).toBe(false);

        wrapper.setProps({
            items: [
                {
                    type: 'gif',
                    id: 'rmxJML4JEeY4E',
                    slug: 'car-rmxJML4JEeY4E',
                    url: 'https://giphy.com/gifs/car-rmxJML4JEeY4E',
                    bitly_gif_url: 'https://gph.is/1iPerml',
                    bitly_url: 'https://gph.is/1iPerml',
                    embed_url: 'https://giphy.com/embed/rmxJML4JEeY4E',
                    username: '',
                    source: 'https://www.reddit.com/r/gifs/comments/1sggbb/i_forgot_how_to_car/',
                    rating: 'pg',
                    content_url: '',
                    source_tld: 'www.reddit.com',
                    source_post_url: 'https://www.reddit.com/r/gifs/comments/1sggbb/i_forgot_how_to_car/',
                    is_sticker: 0,
                    import_datetime: '2013-12-09 12:23:38',
                    trending_datetime: '1970-01-01 00:00:00',
                    images: {
                        fixed_height_still: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/200_s.gif',
                            width: '498',
                            height: '200'
                        },
                        original_still: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy_s.gif',
                            width: '403',
                            height: '162'
                        },
                        fixed_width: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/200w.gif',
                            width: '200',
                            height: '80',
                            size: '1102157',
                            mp4: 'https://media1.giphy.com/media/rmxJML4JEeY4E/200w.mp4',
                            mp4_size: '47227',
                            webp: 'https://media1.giphy.com/media/rmxJML4JEeY4E/200w.webp',
                            webp_size: '335916'
                        },
                        fixed_height_small_still: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/100_s.gif',
                            width: '249',
                            height: '100'
                        },
                        fixed_height_downsampled: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/200_d.gif',
                            width: '498',
                            height: '200',
                            size: '249527',
                            webp: 'https://media1.giphy.com/media/rmxJML4JEeY4E/200_d.webp',
                            webp_size: '46626'
                        },
                        preview: {
                            width: '402',
                            height: '162',
                            mp4: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy-preview.mp4',
                            mp4_size: '23282'
                        },
                        fixed_height_small: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/100.gif',
                            width: '249',
                            height: '100',
                            size: '1467442',
                            mp4: 'https://media1.giphy.com/media/rmxJML4JEeY4E/100.mp4',
                            mp4_size: '46145',
                            webp: 'https://media1.giphy.com/media/rmxJML4JEeY4E/100.webp',
                            webp_size: '461146'
                        },
                        downsized_still: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy-tumblr_s.gif',
                            width: '403',
                            height: '162'
                        },
                        downsized: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy-tumblr.gif',
                            width: '403',
                            height: '162',
                            size: '1164281'
                        },
                        downsized_large: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy.gif',
                            width: '403',
                            height: '162',
                            size: '4089674'
                        },
                        fixed_width_small_still: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/100w_s.gif',
                            width: '100',
                            height: '40'
                        },
                        preview_webp: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy-preview.webp',
                            width: '381',
                            height: '153',
                            size: '49808'
                        },
                        fixed_width_still: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/200w_s.gif',
                            width: '200',
                            height: '80'
                        },
                        fixed_width_small: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/100w.gif',
                            width: '100',
                            height: '40',
                            size: '347222',
                            mp4: 'https://media1.giphy.com/media/rmxJML4JEeY4E/100w.mp4',
                            mp4_size: '20904',
                            webp: 'https://media1.giphy.com/media/rmxJML4JEeY4E/100w.webp',
                            webp_size: '138724'
                        },
                        downsized_small: {
                            width: '402',
                            height: '162',
                            mp4: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy-downsized-small.mp4',
                            mp4_size: '176062'
                        },
                        fixed_width_downsampled: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/200w_d.gif',
                            width: '200',
                            height: '80',
                            size: '57716',
                            webp: 'https://media1.giphy.com/media/rmxJML4JEeY4E/200w_d.webp',
                            webp_size: '13950'
                        },
                        downsized_medium: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy.gif',
                            width: '403',
                            height: '162',
                            size: '4089674'
                        },
                        original: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy.gif',
                            width: '403',
                            height: '162',
                            size: '4089674',
                            frames: '150',
                            mp4: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy.mp4',
                            mp4_size: '178856',
                            webp: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy.webp',
                            webp_size: '903054'
                        },
                        fixed_height: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/200.gif',
                            width: '498',
                            height: '200',
                            size: '4394981',
                            mp4: 'https://media1.giphy.com/media/rmxJML4JEeY4E/200.mp4',
                            mp4_size: '170221',
                            webp: 'https://media1.giphy.com/media/rmxJML4JEeY4E/200.webp',
                            webp_size: '1102222'
                        },
                        looping: {
                            mp4: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy-loop.mp4',
                            mp4_size: '250003'
                        },
                        original_mp4: {
                            width: '480',
                            height: '192',
                            mp4: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy.mp4',
                            mp4_size: '178856'
                        },
                        preview_gif: {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/giphy-preview.gif',
                            width: '202',
                            height: '81',
                            size: '49768'
                        },
                        '480w_still': {
                            url: 'https://media1.giphy.com/media/rmxJML4JEeY4E/480w_s.jpg',
                            width: '480',
                            height: '193'
                        }
                    },
                    title: 'car GIF',
                    _score: 2500002.5
                }
            ],
            error: ''
        });

        expect(wrapper.exists('.error')).toBe(false);
    });

});

