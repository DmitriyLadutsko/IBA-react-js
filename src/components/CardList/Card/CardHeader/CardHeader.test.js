import React from "react";

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardHeader from './index';

configure({adapter: new Adapter()});

describe('<CardHeader />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CardHeader card={{caption: 'caption'}}/>);
    });

    it('should render <h4>caption</h4> if not editMode ',() => {
        expect(wrapper.contains(<h4>caption</h4>)).toEqual(true);
    });

    it('should render <input type="text" /> if editMode ',() => {
        wrapper.setProps({doesEdit: true})
        expect(wrapper.contains(<input type="text" />)).toEqual(true);
    });
});