import React from 'react';
import {shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
//Component to  test
import MyCompopnentWithHooks from "../../components/myCompopnentWithHooks";

describe('MyCompopnentWithState', () => {

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');


    test('Should not show modal', () => {
        useStateSpy.mockImplementation(() => [false, setState]);
        const comp = shallow(<MyCompopnentWithHooks/>);

        expect(comp.find('Modal').length).toEqual(0)
    });

    test('Should show modal', () => {
        useStateSpy.mockImplementation(() => [true, setState]);
        const comp = shallow(<MyCompopnentWithHooks/>);

        expect(comp.find('Modal').length).toEqual(1)
    });

    test('Should call set state on button click', () => {
        useStateSpy.mockImplementation(() => [false, setState]);
        const comp = shallow(<MyCompopnentWithHooks/>);

        comp.find('button').simulate('click');

        expect(setState).toHaveBeenCalledWith(true);
    });

    test.skip('Should call set state on button click', () => {
        const comp = shallow(<MyCompopnentWithHooks/>);

        comp.find('button').simulate('click');

        expect(comp.find('Modal').length).toEqual(1)
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

});
