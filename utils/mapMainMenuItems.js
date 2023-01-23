import { v4 as uuid } from 'uuid';

export const mapMainMenuItems = menuItems => {
  return menuItems.map(menuItem => {
    const destination = menuItem.menuItem
      ? menuItem.menuItem.destination?.uri
      : menuItem.destination?.uri;
    const label = menuItem.menuItem ? menuItem.menuItem.label : menuItem.label;
    const subMenuItems = menuItem.items ? mapMainMenuItems(menuItem.items) : [];

    return {
      id: uuid(),
      destination,
      label,
      subMenuItems,
    };
  });
};
