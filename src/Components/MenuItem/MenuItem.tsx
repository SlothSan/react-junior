interface MenuItemProps {
    key: String,
    name: String,
    price: Number,
    vegetarian: Boolean,
    children?: React.ReactNode
}

const MenuItem = (MenuItem: MenuItemProps): JSX.Element => {
    
    
    return (
        <div className="menu-item">
            <p>Name: {MenuItem.name}</p>
            <p>Price: £<>{MenuItem.price}</>.00</p>
            <p>Vegetarian: {MenuItem.vegetarian ? "Yes!" : "No! :("}</p>
        </div>
    )
}

export default MenuItem;