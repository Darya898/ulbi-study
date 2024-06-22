import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import {Sidebar} from "widgets/Sidebar";
import {withTranslation} from "react-i18next";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";


describe('Sidebar',()=>{
    test('id in the document',()=>{
        const SidebarWithTranslation=withTranslation()(Sidebar);
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle',()=>{
        renderWithTranslation(<Sidebar/>);
        const toggleBtn=screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
})