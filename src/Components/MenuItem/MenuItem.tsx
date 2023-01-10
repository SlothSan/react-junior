interface MenuItemProps {
    id: String,
    name: String,
    price: Number,
    vegetarian: Boolean,
}

const MenuItem = (MenuItem: MenuItemProps): JSX.Element => {
    
    
    return (
        <div className="menu-item">
            <p>Name: {MenuItem.name}</p>
        </div>
    )
}

export default MenuItem;