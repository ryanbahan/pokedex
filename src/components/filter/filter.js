import { useState } from 'react'
import styled from 'styled-components'

const Filter = ({ title, items }) => {
    const [ dropdown, toggleDropdown ] = useState(false)
    console.log(items)

    // toggleDropdown = (e) => {
    //     this.setState({ dropdown: !this.state.dropdown });
    // }

    // closeModal = (e) => {
    //     this.setState({ dropdown: false });
    // }

    // checkFilteredItems = (selection) => {
    //     const { filters } = this.context.state;

    //     if (filters.find(item => item === selection)) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    // updateForm = (selection) => {
    //     this.context.update({ pageIndex: 1 });

    //     const { filters } = this.context.state;
    //     let updatedItems;

    //     if (filters.find(item => item === selection)) {
    //         updatedItems = filters.filter(item => item !== selection);
    //     } else {
    //         updatedItems = filters.concat([selection]);
    //     }

    //     this.context.update({ filters: [...updatedItems] })
    // }

    // getListItems = (items) => {
    //     return items.map(item => (
    //         <div key={item} style={{ display: "flex", alignItems: "baseline", padding: "0.5rem" }}>
    //             <input
    //                 type="checkbox"
    //                 onClick={() => this.updateForm(item)}
    //                 defaultChecked={this.checkFilteredItems(item)}
    //             />
    //             <p id={item}>{item}</p>
    //         </div>
    //     ));
    // }

    // displayList = (items) => {
    //     const listItems = this.getListItems(items);

    //     return (
    //         <div className="filter-dropdown" style={dropdownStyles}>
    //             {listItems}
    //         </div>
    //     );
    // }


    return (
        <div style={{ flexWrap: "wrap" }}>
            <Button
                type="button"
                onClick={""}
            >
                {title + "▼"}
            </Button>
        </div>
    )
}

const Button = styled.button`
    font-size: 1.25rem;
    margin-left: 0.5rem;
    cursor: pointer;
`

export default Filter;

// { this.state.dropdown && this.displayList(this.props.items) }