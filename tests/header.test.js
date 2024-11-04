
import { h } from 'preact';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { mount } from 'enzyme'

import Header from '../src/components/header';

describe('Header Component', () => {
	it('renders correctly', () => {
		const wrapper = mount(<Header cartCount={1} routeProps={{}} />);
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('h1').text()).toBe('Mobi Store');
	});
});

