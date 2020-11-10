import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Card } from './index';

configure({adapter: new Adapter()});

describe('<Card />', () => {
    // let wrapper;
    //
    // beforeEach(() => {
    //     wrapper = shallow(<Card />);
    // });
    //
    // it('should render two <CardBody /> elements if not authenticated', function () {
    //     expect(wrapper.find(NavigationItem)).toHaveLength(2);
    // });

});