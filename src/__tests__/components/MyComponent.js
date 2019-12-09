import React from 'react';
import {shallow} from 'enzyme';
//Component to  test
import MyComponent from "../../components/myComponent";

describe('mycomponent', () => {

    test('dummy test', () => {
        const comp = shallow(<MyComponent/>);
        expect(comp.find('span').length).toEqual(1)
    });

    const minProps = {
        showModal: false
    };

    test('should not render modal when showModal is False', () => {
        const comp = shallow(
            <MyComponent
                {...minProps}
            />
        );

        expect(comp.find('Modal').length).toEqual(0);
    });


    test('should render modal when showModal is True', () => {
        const comp = shallow(
            <MyComponent
                {...minProps}
                showModal={true}
            />
        );

        expect(comp.find('Modal').length).toEqual(1);
    });

});
