import { useDispatch, useSelector } from 'react-redux';
import { closeDrawer } from '../../../redux/app/actions';

export function Drawer() {
  const dispatch = useDispatch();
  const drawerIsOpen = useSelector((state) => state.app.drawer);

  function handleCloseDrawer() {
    dispatch(closeDrawer());
  }

  return (
    <div className={`drawer ${drawerIsOpen ? 'open' : ''}`}>
      <div className="drawer-overlay" onClick={handleCloseDrawer} />
      <div className="drawer-content">
        <button type="button" className="btn-close" onClick={handleCloseDrawer}>
          <i className="ion ion-ios-close" />
        </button>

        XXX
      </div>
    </div>
  );
}
