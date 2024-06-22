import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Button, {ThemeButton} from "./Button";


describe('Button ',()=>{
    test('in the document',()=>{
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('has class clear',()=>{
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug()
    });
})