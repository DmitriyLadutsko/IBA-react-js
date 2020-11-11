import React from "react";

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardBody from './index';

configure({adapter: new Adapter()});

describe('<CardBody />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CardBody card={{text: 'caption'}}/>);
    });

    it('should render <p>caption</p> if not editMode ',() => {
        expect(wrapper.contains(<p>caption</p>)).toEqual(true);
    });

    it('should render <textarea rows="3" /> if editMode ',() => {
        wrapper.setProps({doesEdit: true})
        expect(wrapper.contains(<textarea rows="3" />)).toEqual(true);
    });
});