import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../service/apiRestaurant';
import MenuItem from '../menu/MenuItem';
function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza}></MenuItem>
      ))}
    </ul>
  );
}

export async function Loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
