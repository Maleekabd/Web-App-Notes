import { createContext, useEffect, useState } from "react";

const ITEMS_STORAGE_KEY = 'items'
const ItemContext = createContext();

const ItemProvider = ({ children }) => {
    const [lastItemId, setLastItemId] = useState(0)
    const [items, setItems] = useState([]);
    const [archived, setArchived] = useState([])

    useEffect(() => {
        const storedItems = JSON.parse(sessionStorage.getItem(ITEMS_STORAGE_KEY)) || [];
        setItems(storedItems);
        setLastItemId(storedItems.length > 0 ? storedItems[storedItems.length - 1].id : 0)
    }, [])

    useEffect(() => {
        sessionStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
    }, [items])

    const addItem = (newItem) => {
        setItems((prevItems) => [...prevItems, { ...newItem, id: lastItemId + 1 }]);
        setLastItemId((prevLastItemId) => prevLastItemId + 1)
    }

    const removeItem = (id) => {
        const updateItem = items.filter(item => item.id !== id)
        setItems(updateItem)
    }

    const updateItem = (id) => {
        const updateItem = items.find(item => item.id === id);

        updateItem.archived = true;

        setArchived((prevArchived) => [
            ...prevArchived,
            updateItem
        ])
        setItems((prevItems) => prevItems.map((item) => item.id === id ? updateItem : item))
    }

    return (
        <ItemContext.Provider value={{ items, addItem, removeItem, updateItem }}>
            {children}
        </ItemContext.Provider>
    )
}

export { ItemContext, ItemProvider }


