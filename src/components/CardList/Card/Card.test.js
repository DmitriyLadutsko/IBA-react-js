import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Card } from './index';
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

configure({adapter: new Adapter()});

describe('<Card />', () => {
    let wrapper;
    const card = {
        caption: 'caption',
        text: 'text'
    };

    beforeEach(() => {
        wrapper = shallow(<Card card={card} onChangeCard={()=>{}} onRemoveCard={()=>{}}/>);
    });

    it('should view 1 button and checkbox if not onlyView, not isEdit, not isChecked', () => {
        expect(wrapper.find('input')).toHaveLength(3);
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.find(CardHeader)).toHaveLength(1);
        expect(wrapper.find(CardBody)).toHaveLength(1);
    });

    it('should view 1 button and checkbox if isChecked not isEdit and not onlyView', () => {
        wrapper.find('input[type="checkbox"]').simulate('change');
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should view 2 buttons if the edit-mode is clicked', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('button')).toHaveLength(2);
    });

    it('should view 1 button and checkbox if the saveChanges is clicked', () => {
        wrapper.find('button').simulate('click');
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('input')).toHaveLength(3);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should view 1 button and checkbox if the doNotSave is clicked', () => {
        wrapper.find('button').simulate('click');
        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.find('input')).toHaveLength(3);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should return to non-editing mode if onlyView is changed', () => {
        wrapper.find('button').simulate('click');
        wrapper.setProps({onlyView: true})
        expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
    });

    it('should change caption and text state', () => {
        expect(wrapper.find('input').at(1).prop('value')).toEqual('caption');
        expect(wrapper.find('input').at(2).prop('value')).toEqual('text');
        wrapper.find('input').at(1).simulate('change', {
            target: {value: 'new-caption'}
        });
        wrapper.find('input').at(2).simulate('change', {
            target: {value: 'new-text'}
        });
        expect(wrapper.find('input').at(1).prop('value')).toEqual('new-caption');
        expect(wrapper.find('input').at(2).prop('value')).toEqual('new-text');
    });

});