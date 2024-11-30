
import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function NavBar() {
    const items = [
        {
            label: 'How it works?',
            icon: 'pi pi-star',
            url: '#How-it-works'
            
        },
        {
            label: 'Authors',
            icon: 'pi pi-envelope',
            url: "#Authors"
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
        