import React from 'react';
import {shallow} from 'enzyme';
//Component to  test
import MyComponentWithState from "../../components/myComponentWithState";

describe('MyComponentWithState', () => {

    test('Should show Modal when Button clicked', () => {
        const comp = shallow(<MyComponentWithState/>);

        expect(comp.find('Modal').length).toEqual(0)

        comp.find('button').simulate('click');

        expect(comp.find('Modal').length).toEqual(1)
    });

    test('Should show Modal when state changed', () => {
        const comp = shallow(<MyComponentWithState/>);

        expect(comp.find('Modal').length).toEqual(0)

        comp.setState({showModal: true});

        expect(comp.find('Modal').length).toEqual(1)
    });

    test('Should show Modal when instance func called', () => {
        const comp = shallow(<MyComponentWithState/>);

        expect(comp.find('Modal').length).toEqual(0)

        comp.instance().showModal();

        expect(comp.find('Modal').length).toEqual(1)
    });

});
