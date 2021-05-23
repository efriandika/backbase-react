import { appTypes } from './types';

export const openDrawer = () => ({ type: appTypes.OPEN_DRAWER });
export const closeDrawer = () => ({ type: appTypes.CLOSE_DRAWER });
export const toggleDrawer = () => ({ type: appTypes.TOGGLE_DRAWER });
